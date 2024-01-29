import { Component, OnInit } from '@angular/core';
import { Producto } from "../Modelos/producto";
import { AñadirService } from "../añadir.service";
import { Router } from '@angular/router';
import { Productos } from "../Modelos/productoMock";

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit {
  indice: number | undefined
  productoList: Producto[] = []
  product: Producto | undefined
  constructor(private productoService: AñadirService, private router: Router) {
  }
  ngOnInit() {
    this.productoList = this.productoService.getProducts()
  }
  getProducto(product: Producto) {
    this.productoService.setProduct(product)
    //this.router.navigate(["/modificar"])
  }

  deleteProducto(product: Producto) {
    this.productoService.setProduct(product)
    this.productoService.eliminarProduct()
    this.productoList = this.productoService.getProducts()
    //location.reload()
  }

  protected readonly Productos = Productos;
}
