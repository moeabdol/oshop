import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private _authService: AuthService) { }

  signin() {
    this._authService.signin();
  }
}
