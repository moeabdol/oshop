import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { UserService } from './user.service';
import { AppUser } from './models/app-user';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth,
              private _route: ActivatedRoute,
              private _userService: UserService) {
    this.user$ = _afAuth.authState;
  }

  signin() {
    const returnUrl =
      this._route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this._afAuth.auth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  signout() {
    this._afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
    .switchMap(user => this._userService.get(user.uid).valueChanges());
  }
}
