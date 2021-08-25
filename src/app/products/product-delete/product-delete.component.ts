import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service/service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {Manufacturer} from "../../model/manufacturer";
import {ManufacturerService} from "../../service/manufacturer.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  manuId: any

  manufacturers: Manufacturer[] = [];

  id : any ;

  // @ts-ignore
  productsForm: FormGroup

  product: Product = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    manufacturer: {
      id: 0
    }
  }

  constructor(private service: ServiceService,
              private manufacturer: ManufacturerService,
              private activeRouter: ActivatedRoute,
              private router:Router

  ) {
    this.activeRouter.paramMap.subscribe((paraMap:ParamMap)=> {
      this.id = paraMap.get('id');
      this.getProduct(this.id)
    })
  }

  ngOnInit(): void {
    this.getAllManufacture();
  }

  getProduct(id:number){
    this.service.getProductById(id).subscribe(data=>{
      this.productsForm = new FormGroup({
        id:new FormControl(data.id),
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
        manufacturer: new FormControl(data.manufacturer.id
        )
      })
      this.manuId = data.manufacturer.id
    })
  }
  deleteProduct(id: number){
    console.log(id)
    this.service.deleteProduct(id).subscribe(data =>{
      this.router.navigate([''])
    })
  }
  getAllManufacture() {
    this.manufacturer.getAll().subscribe((data: Product[]) => {
      this.manufacturers = data;
    })
  }
}
