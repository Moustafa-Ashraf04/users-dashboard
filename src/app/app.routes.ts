import { Routes } from '@angular/router';
import { DisplayUsersComponent } from './display-users/display-users.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: DisplayUsersComponent },
];
