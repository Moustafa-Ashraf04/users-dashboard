import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent {

}
