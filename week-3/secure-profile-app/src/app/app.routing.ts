/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 7/22/2020
 * Description: routes
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
