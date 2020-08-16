/**
 * Title: grade-summary.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/12/2020
 * Description: app module
 */

import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
