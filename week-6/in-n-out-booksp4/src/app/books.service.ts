/**
 * Title: books.service.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/5/2020
 * Description: books service
 */
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: "0345339681",
        title: "The Hobbit",
        authors: ["JRR Tolkien"],
        description: "Bilbo Baggins goes on an unexpected adventure with Gandalf the Grey. \
          They encounter a dragon, and Bilbo discovers a mysterious ring.",
        numOfPages: 300
      },
      {
        isbn: "1514296721",
        title: "The Fellowship of the Ring",
        authors: ["JRR Tolkien"],
        description: "Gandalf the Grey gathers together a band of adventurers, \
          and they set off on a mission to destroy the One Ring.",
        numOfPages: 432
      },
      {
        isbn: "1514297272",
        title: "The Two Towers",
        authors: ["JRR Tolkien"],
        description: "The Fellowship continues its quest to detroy the one ring. \
          The companions are separated, but Frodo and Sam continue alone toward the \
          land of Mordor, domain of the Dark Lord Sauron.",
        numOfPages: 448
      },
      {
        isbn: "1514298139",
        title: "Return of the King",
        authors: ["JRR Tolkien"],
        description: "Aragorn joins the riders of Rohan and is revealed to be the heir of Gondor.\
          Gandalf returns as Gandalf the White and confronts Saruman. Frodo becomes separated \
          from Sam and is captured by Orcs.",
        numOfPages: 432
      },
      {
        isbn: "9780143111580",
        title: "Dune",
        authors: ["Frank Herbert"],
        description: "The Great Houses maneuver for advantage in a struggle for control of a \
          Galactic Empire. One man pursues his destiny as the prophesied messiah of the people \
          of Dune, the Freman.",
        numOfPages: 890
      }
    ]
   }

   getBooks(): Observable<IBook[]> {
     return of(this.books);
   }

   getBook(isbn: string): IBook {
     for (let book of this.books) {
       if (book.isbn === isbn) {
         return book;
       }
     }
   }
}

