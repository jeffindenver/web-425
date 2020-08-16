/**
 * Title: gpa.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/12/2020
 * Description: gpa component
 */

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
