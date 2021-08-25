import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router, RouterLink} from "@angular/router";import {Manufacturer} from "../../model/manufacturer";
import {Product} from "../../model/product";
import {ServiceService} from "../../service/service.service";
import {ManufacturerService} from "../../service/manufacturer.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  manufacturers: Manufacturer[] = [];

  id: any;

  message = ''

  manuId: any

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
  update() {
    this.product.name = this.productsForm.value.name;
    this.product.price = this.productsForm.value.price;
    this.product.description = this.productsForm.value.description;
    this.product.manufacturer.id = this.productsForm.value.manufacturer;
    console.log(this.product)
    this.service.updateProduct(this.id,this.product).subscribe(data=>{
        this.router.navigate([''])
    })

  }

  getManufacturer(){
    return this.productsForm.get('manufacturer')
  }

  getAllManufacture() {
    this.manufacturer.getAll().subscribe((data: Product[]) => {
      this.manufacturers = data;
    })
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
}
