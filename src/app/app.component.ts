import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _authService: AuthService,
              private _userService: UserService,
              private _router: Router) {
    _authService.user$.subscribe(user => {
      if (user) {
        _userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        _router.navigateByUrl(returnUrl);
      }
    });
  }
}
