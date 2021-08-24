import {Manufacturer} from "./manufacturer";

export interface Product {
  id ?:number,
  name?: string,
  price?: number,
  description?: string,
  manufacturer?:any
}
