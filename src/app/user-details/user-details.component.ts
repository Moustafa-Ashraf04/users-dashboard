import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [LoadingSpinnerComponent, HeaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  user!: User;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // subscribe to params change to update page with search result
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);
      if (isNaN(id)) {
        console.error('Invalid user ID');
        this.isLoading = false;
        return;
      }
      this.userService.getUserDetails(id).subscribe({
        next: (res) => {
          this.user = res.data;
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error fetching user details', error);
        },
      });
    });
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
