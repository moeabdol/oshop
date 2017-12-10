import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) { }

  canActivate() {
    return this._authService.user$.map(user => {
      if (user) return true;

      this._router.navigate(['/signin']);
      return false;
    });
  }
}
