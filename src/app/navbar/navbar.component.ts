import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: firebase.User;

  constructor(private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(user => this.user = user);
  }

  signout() {
    this._afAuth.auth.signOut();
  }
}
