import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/user';
import { HoverEffectDirective } from '../shared/hover-effect.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [HoverEffectDirective],
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
