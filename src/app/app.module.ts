import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {ProductComponent} from "./products/product/product.component";
import {ReactiveFormsModule} from "@angular/forms";
import { ProductEditComponent } from './products/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
