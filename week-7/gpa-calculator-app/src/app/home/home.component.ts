/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/12/2020
 * Description: home component
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gpaTotal: number = 0;

  transcriptForm: FormGroup;
  transcriptEntries: Array < ITranscript > = [];
  selectableGrades: Array < string > = ["A", "A-", "B+", "B", "B-",
    "C+", "C", "C-", "D+", "D", "D-", "F"
  ];

  gpaMap = new Map([
    ["A", 4.0], ["A-", 3.7], ["B+", 3.33], ["B", 3.0],
    ["B-", 2.7], ["C+", 2.3], ["C", 2.0], ["C-", 1.7],
    ["D+", 1.3], ["D", 1.0], ["D-", 0.7], ["F", 0.0]
  ]);

  constructor(private fb: FormBuilder) {  }

  calculateResults() {
    let gpa: number = 0;

    this.transcriptEntries.forEach( item => {
      gpa += this.gpaMap.get(item.grade);
    })

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0.0;
  }

  get form() {
    return this.transcriptForm.controls;
  }

  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value});

    event.currentTarget.reset();
  }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

}
