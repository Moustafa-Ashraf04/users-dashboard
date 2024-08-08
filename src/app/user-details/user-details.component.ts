import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from '../header/header.component';

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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserDetails(+id).subscribe({
        next: (res) => {
          this.user = res.data;
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error fetching user details', error);
        },
      });
    }
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
