import { Component, Input } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private router: Router) {}

  navigateToDetails(): void {
    this.router.navigate(['/users', this.user.id]);
  }
}
