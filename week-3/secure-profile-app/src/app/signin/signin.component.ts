/**
 * Title: signin.component.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 7/22/2020
 * Description: signin component
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signin() {
    this.isLoggedIn = true;
    this.router.navigate( [ '/home' ], { queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
    alert("user signed in");
  }




}
