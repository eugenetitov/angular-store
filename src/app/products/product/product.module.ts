import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";

@NgModule({
  declarations: [ProductComponent],
  imports: [
    RouterModule.forChild([
      { path: "", component: ProductComponent, pathMatch: "full" }
    ])
  ]
})
export class ProductModule {}
