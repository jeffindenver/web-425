/**
 * Title: sign-in.service.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/19/2020
 * Description: sign-in service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1107, 1008, 1009, 1010, 1011, 1012];
   }

   validate(studentId: number) {
     return this.studentIds.some(id => id === studentId);
   }
}
