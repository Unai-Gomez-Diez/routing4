import { Injectable } from '@angular/core';
import { Productos } from "./Modelos/productoMock";
import { Producto } from './Modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class AñadirService {
  productList = Productos
  product: Producto | undefined
  getProducts() {
    return this.productList
  }

  getProduct() {
    return this.product
  }
  setProduct(producto: Producto) {
    this.product = producto
  }
  modifiProducts() {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == this.product?.id) {
        this.productList[i].nombre == this.product.nombre
        this.productList[i].cantidad == this.product.cantidad
        this.productList[i].precio == this.product.precio
      }
    }

  }
  añadirProduct() {
    if (this.product) {
      this.product.id = this.productList.length + 1
      this.productList.push(this.product)
    }

  }
}
