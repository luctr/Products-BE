import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {ProductComponent} from "./products/product/product.component";
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import {RouterModule} from "@angular/router";
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { ProductNewComponent } from './products/product-new/product-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
