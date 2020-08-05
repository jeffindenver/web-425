/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/5/2020
 * Description: app component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-n-out-books';
  assignment: string;

  constructor() {
    this.assignment = "Assignment 5.4 - Dialogues";
  }
}
