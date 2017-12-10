import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user$: Observable<firebase.User>;

  constructor(private _afAuth: AngularFireAuth) {
    this.user$ = _afAuth.authState;
  }

  signout() {
    this._afAuth.auth.signOut();
  }
}
