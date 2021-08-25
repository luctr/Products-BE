import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API = `${environment.API}`

  constructor(private httpClient:HttpClient) {
  }

  createProduct(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.API+'/products',product);
  }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API + '/products');
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.API+'/products/'+id)
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.API + "/products/" + id, product);
  }

  deleteProduct(id: number): Observable<Product>{
    return this.httpClient.delete<Product>(this.API + '/products/' + id);
  }

}
