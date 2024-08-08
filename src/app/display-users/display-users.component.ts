import { Component, OnInit } from '@angular/core';

import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from '../header/header.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { UserService } from '../shared/user.service';
import { GetUsersRes, User } from '../shared/user';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [
    HeaderComponent,
    UserCardComponent,
    PaginationComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css',
})
export class DisplayUsersComponent implements OnInit {
  users: User[] = [];
  total: number = 0;
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsersData(1);
  }

  getUsersData(page: number) {
    this.isLoading = true;
    this.userService.getUsers(page).subscribe({
      next: (res: GetUsersRes) => {
        this.users = res.data;
        this.total = res.total_pages;
        this.currentPage = page;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error fetching users', error);
      },
    });
  }

  onPageChange(page: number): void {
    this.getUsersData(page);
  }
}
