import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  username: String | null | undefined;

  constructor(public auth: AngularFireAuth) { 
    auth.authState.subscribe(result => {
      this.username = result?.displayName;
    })
  }

  logout() {
    this.auth.signOut();
  }
}
