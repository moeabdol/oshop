import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class UserService {
  constructor(private _db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this._db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email
    });
  }
}
