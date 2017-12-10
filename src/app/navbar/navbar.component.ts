import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService) { }

  signout() {
    this.authService.signout();
  }
}
