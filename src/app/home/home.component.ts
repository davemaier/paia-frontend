import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { LoadDiagramsAction } from 'state/diagram.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;

  public oktaAuth: OktaAuthService;

  constructor(private okta: OktaAuthService, private store: Store ) {
    this.oktaAuth = okta;
  }


  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );

    this.loadDiagrams()
  }

  loadDiagrams(){
    if(this.isAuthenticated)
      this.store.dispatch(new LoadDiagramsAction("test"));
  }
}
