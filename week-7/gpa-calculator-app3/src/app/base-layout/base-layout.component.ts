/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/19/2020
 * Description: base layout
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieServie: CookieService, private router: Router) {
    this.assignment = "Excercise 7.2 - Reactive Froms";
   }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieServie.deleteAll();
    this.router.navigate( ['/session/sign-in'] );
  }
}
