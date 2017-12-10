import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth) {
    this.user$ = _afAuth.authState;
  }

  signin() {
    this._afAuth.auth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  signout() {
    this._afAuth.auth.signOut();
  }
}
