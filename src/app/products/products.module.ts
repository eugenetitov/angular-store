import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    RouterModule.forChild([
      { path: "", component: ProductsComponent, pathMatch: "full" }
    ])
  ]
})
export class ProductsModule {}
