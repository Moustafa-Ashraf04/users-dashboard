import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goBackHome() {
    this.router.navigate(['']);
  }
}
