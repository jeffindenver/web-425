//author: Professor Krasso
//modified by: Jeff Shepherd

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
   }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("John Williams", "Theatrical"),
      new Composer("Amadeus Mozart", "Classical"),
      new Composer("Elton John", "Popular"),
      new Composer("Imogen Heap", "Alternative"),
      new Composer("Sergei Prokofiev", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
