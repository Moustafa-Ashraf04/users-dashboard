import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { GetUsersRes, User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [HeaderComponent, UserCardComponent, PaginationComponent],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css',
})
export class DisplayUsersComponent implements OnInit {
  users: User[] = [];
  total: number = 0;
  currentPage: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsersData(1);
  }

  getUsersData(page: number) {
    this.userService.getUsers(page).subscribe((res: GetUsersRes) => {
      this.users = res.data;
      this.total = res.total_pages;
      this.currentPage = page;
    });
  }

  onPageChange(page: number): void {
    this.getUsersData(page);
  }
}
