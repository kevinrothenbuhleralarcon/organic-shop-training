import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.subscription = this.authService.user$.subscribe(user => {
      if(user) {        
        const url = localStorage.getItem("returnUrl");        
        this.router.navigate([url]);
      }
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
