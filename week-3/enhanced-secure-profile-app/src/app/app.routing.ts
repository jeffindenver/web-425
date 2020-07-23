//author: Professor Krasso
//modified by: Jeff Shepherd

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    canActivate: [SignInGuard],
    component: HomeComponent
  }
]
