import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, SnapshotAction } from '@angular/fire/compat/database';
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) {

  }

  save(user: firebase.User) {    
    this.db.object("/users/" + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  getUser(uid: String | undefined): Observable<AppUser | null> {
    return this.db.object<AppUser>("/users/" + uid).valueChanges();
  }
}
