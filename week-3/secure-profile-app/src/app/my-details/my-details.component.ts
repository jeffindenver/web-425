//author: Professor Krasso
//modified by: Jeff Shepherd
import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#typescript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString () {
    console.log(
      `
      Full name: ${this.fullName}
      Favorite food: ${this.favoriteFood}
      Favorite color: ${this.favoriteColor}
      `);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Jeff Shepherd", "Anything Asian", "Blue");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
