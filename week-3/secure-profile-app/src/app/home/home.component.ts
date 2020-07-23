/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 7/22/2020
 * Description: home component
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;
  assignment: string = "Excercise 2.3 - Data Binding";

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
