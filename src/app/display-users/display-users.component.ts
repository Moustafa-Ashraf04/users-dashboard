import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [HeaderComponent, UserCardComponent, PaginationComponent],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css',
})
export class DisplayUsersComponent {
  items = [1, 2, 3, 4, 5, 6];
}
