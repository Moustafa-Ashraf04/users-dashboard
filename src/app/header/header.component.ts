import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchId: string = '';
  searchResult: User | null = null;
  searchResultFound: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  onSearch(query: string, searchInput: HTMLInputElement): void {
    if (query) {
      this.userService.getUserDetails(+query).subscribe({
        next: (res) => {
          this.searchResult = res.data;
          this.searchResultFound = !!this.searchResult;
        },
        error: (error) => {
          this.searchResultFound = false;
          console.error('Error fetching user details', error);
        },
      });
    } else {
      this.searchResultFound = false;
    }
  }

  onEnter(searchInput: HTMLInputElement): void {
    if (this.searchResultFound) {
      this.navigateToDetails(searchInput);
    }
  }

  navigateToDetails(searchInput: HTMLInputElement): void {
    if (this.searchResult) {
      this.router.navigate([`/users/${this.searchResult.id}`]).then(() => {
        // Clear search results after navigation
        this.searchResult = null;
        this.searchResultFound = false;
        this.clearInput(searchInput);
      });
    }
  }

  // clear and remove focus from input field
  private clearInput(input: HTMLInputElement): void {
    input.value = '';
    input.blur();
  }
}
