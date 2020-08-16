/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/12/2020
 * Description: base layout
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = "Excercise 6.4 - Input Properties";
   }

  ngOnInit(): void {
  }

}
