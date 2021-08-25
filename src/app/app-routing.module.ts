import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./products/product/product.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";
import {ProductNewComponent} from "./products/product-new/product-new.component";
import {ProductDeleteComponent} from "./products/product-delete/product-delete.component";

const routes: Routes = [
  {
    path: '',
    component:ProductComponent
  },
  {
    path:'update/:id',
    component:ProductEditComponent
  },
  {
    path:'create',
    component:ProductNewComponent
  },
  {
    path:'delete/:id',
    component:ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
