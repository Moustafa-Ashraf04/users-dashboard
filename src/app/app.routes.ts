import { Routes } from '@angular/router';

import { UserDetailsComponent } from './user-details/user-details.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: DisplayUsersComponent, title: 'Users Dashboard' },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
  { path: '**', component: NotFoundComponent, title: '404 Not Found' },
];
