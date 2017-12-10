import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _router: Router) { }

  canActivate(router, state: RouterStateSnapshot) {
    return this._authService.user$.map(user => {
      if (user) return true;

      this._router.navigate(['/signin'],
        { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}
