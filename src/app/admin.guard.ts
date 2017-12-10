import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _authService: AuthService) { }

  canActivate(): Observable<boolean> {
    return this._authService.appUser$.map(appUser => appUser.isAdmin);
  }
}
