import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gpaTotal: number = 0;

  transcriptEntry: ITranscript;
  transcriptEntries: Array < ITranscript > = [];
  selectableGrades: Array < string > = ["A", "A-", "B+", "B", "B-",
    "C+", "C", "C-", "D+", "D", "D-", "F"
  ];

  // gpaMap = new Map([
  //   ["A", 4.0], ["A-", 3.7], ["B+", 3.33], ["B", 3.0],
  //   ["B-", 2.7], ["C+", 2.3], ["C", 2.0], ["C-", 1.7],
  //   ["D+", 1.3], ["D", 1.0], ["D-", 0.7], ["F", 0.0]
  // ]);

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpa: number = 0;

    for (let item of this.transcriptEntries) {
      switch (item.grade) {
        case "A":
          gpa += 4.0;
          break;
        case "A-":
          gpa += 3.7;
          break;
        case "B+":
          gpa += 3.33;
          break;
        case "B":
          gpa += 3.00;
          break;
        case "B-":
          gpa += 2.7;
          break;
        case "C+":
          gpa += 2.3;
          break;
        case "C":
          gpa += 2.00;
          break;
        case "C-":
          gpa += 1.7
          break;
        case "D+":
          gpa += 1.3;
          break;
        case "D-":
          gpa += 1.0;
          break;
        case "F":
          gpa += 0.0;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0.0;
  }

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {}

}
