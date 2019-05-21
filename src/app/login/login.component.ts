import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthenticationService } from "./auth.services";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  email: string;
  password: string;
  loading: boolean = false;

  loginForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = new FormGroup({});

    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  login() {
    this.loading = true;
    this.authenticationService
      .login(this.email, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          alert(JSON.stringify(error));
          //this.alertService.error(error);
          this.loading = false;
        }
      );

    //this.loading = !this.loading;
  }
}
