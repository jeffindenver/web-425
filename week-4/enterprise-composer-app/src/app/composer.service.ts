import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      { composerId: 100, fullName: "John Williams", genre: "Theatrical"},
      { composerId: 101, fullName: "Amadeus Mozart", genre: "Classical"},
      { composerId: 102, fullName: "Elton John", genre: "Popular"},
      { composerId: 103, fullName: "Imogen Heap", genre: "Alternative"},
      { composerId: 104, fullName: "Sergei Prokofiev", genre: "Classical"}
    ]
   }

   filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers => composers.filter(
        composer => composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1)))
    }

   getComposers(): Observable<IComposer[]> {
    return of(this.composers);
   }

   getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
   }
}
