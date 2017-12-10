import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private _afAuth: AngularFireAuth) { }

  signin() {
    this._afAuth.auth
      .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
