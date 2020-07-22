//author: Professor Krasso
//modified by: Jeff Shepherd
import { IComposer } from './composer.interface';

export class Composer {
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

   getComposers() {
    return this.composers;
   }

   getComposer(composerId: number) {
    return this.composers.find (item => {composerId === item.composerId});
   }
}
