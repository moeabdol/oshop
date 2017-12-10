import { Component } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(x => console.log(x));
  }

  signout() {
    this._afAuth.auth.signOut();
  }
}
