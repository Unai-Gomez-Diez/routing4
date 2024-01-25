import { Component, OnInit } from '@angular/core';
import {Producto} from "../Modelos/producto";
import {AñadirService} from "../añadir.service";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit{
    productoList: Producto[]=[]
  product: Producto | undefined
  constructor(private productoService: AñadirService) {
  }
  ngOnInit() {
      this.productoList = this.productoService.getProducts()
  }
  getProducto(product:Producto){
      this.product = product
  }
}
