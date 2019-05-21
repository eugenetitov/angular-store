import { Component, OnInit, OnDestroy } from "@angular/core";
import { environment } from "../environments/environment";
import { Subscription } from "rxjs";
import { User, AuthenticationService } from "./login/index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  enviroment = environment.name;
  constructor(private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  logout() {
    this.authenticationService.logout();
  }
}
