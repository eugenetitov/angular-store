import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TransferHttpCacheModule } from "@nguniversal/common";

import * as login from "./login/index";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent, login.LoginComponent],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserModule.withServerTransition({ appId: "my-app" }),
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      {
        path: "login",
        component: login.LoginComponent
      },
      {
        path: "products",
        loadChildren: "./products/products.module#ProductsModule"
      },
      {
        path: "products/product/:id",
        loadChildren: "./products/product/product.module#ProductModule"
      }
    ]),
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
