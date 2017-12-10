import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _authService: AuthService,
              private _userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this._authService.user$
    .switchMap(user => this._userService.get(user.uid).valueChanges())
    .map(appUser => appUser.isAdmin);
  }
}
