import { Component, OnInit } from '@angular/core';
import {Manufacturer} from "../../model/manufacturer";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceService} from "../../service/service.service";
import {ManufacturerService} from "../../service/manufacturer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
  manufacturers: Manufacturer[] = [];

  products: Product[] = [];

  product:Product ={
    id : 0,
    name: "",
    price: 0,
    description: "",
    manufacturer:{
      id:0
    }
  }

  productsForm: FormGroup = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      manufacturer: new FormControl({
        id: new FormControl()
      }),
    }
  );

  constructor(private service: ServiceService,
              private manufacturer: ManufacturerService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getAllManufacture()
  }
  getAll() {
    this.service.getAll().subscribe((data: Product[]) => {
      this.products = data;
    })
  }
  create(){
    this.product.name = this.productsForm.value.name;
    this.product.price = this.productsForm.value.price;
    this.product.description = this.productsForm.value.description;
    this.product.manufacturer.id = this.productsForm.value.manufacturer;
    console.log(this.product)
    this.service.createProduct(this.product).subscribe(data=>{
      this.router.navigate([''])
    })
  }
  getAllManufacture() {
    this.manufacturer.getAll().subscribe((data: Product[]) => {
      this.manufacturers = data;
    })
  }

}
