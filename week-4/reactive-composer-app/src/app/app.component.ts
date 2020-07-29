/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 7/22/2020
 * Description: app component
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignmnet 4.3 - Handling Events with Observables";
  title: string = 'Assignment 4.3';
}
