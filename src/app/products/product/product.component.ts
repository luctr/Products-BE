import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ServiceService} from "../../service/service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Manufacturer} from "../../model/manufacturer";
import {ManufacturerService} from "../../service/manufacturer.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

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
              private manufacturer: ManufacturerService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllManufacture()
  }

  getAll() {
    this.service.getAll().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  getAllManufacture() {
    this.manufacturer.getAll().subscribe((data: Product[]) => {
      this.manufacturers = data;
    })
  }

  create() {
     this.product.name = this.productsForm.value.name;
     this.product.price = this.productsForm.value.price;
     this.product.description = this.productsForm.value.description;
     this.product.manufacturer.id = this.productsForm.value.manufacturer;
     console.log(this.product.name)
    this.service.createProduct(this.product).subscribe(data=>{
      this.getAll()
    })
  }
}
