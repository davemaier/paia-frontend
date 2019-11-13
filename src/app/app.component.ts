import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'praia';
  isAuthenticated: boolean;

  isSidenavExpanded: boolean;

  constructor(public oktaAuth: OktaAuthService, private router: Router) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  login(){

    if(!this.isAuthenticated){
      this.oktaAuth.loginRedirect("/profile")
      return
    }

    this.router.navigate(['profile']);

  }
}
