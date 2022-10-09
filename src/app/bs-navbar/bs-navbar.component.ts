import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth) { 
    this.user$ = auth.authState;
  }

  logout() {
    this.auth.signOut();
  }
}
