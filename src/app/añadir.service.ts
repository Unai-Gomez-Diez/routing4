import { Injectable } from '@angular/core';
import {Productos} from "./Modelos/productoMock";

@Injectable({
  providedIn: 'root'
})
export class AñadirService {
  productList = Productos
  getProducts(){
    return this.productList
  }
}
