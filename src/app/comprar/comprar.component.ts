import { Component, OnInit } from '@angular/core';
import { Producto } from "../Modelos/producto";
import { AñadirService } from "../añadir.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent implements OnInit {
  productoList: Producto[] = []
  product: Producto | undefined
  constructor(private productoService: AñadirService, private router: Router) {
  }
  ngOnInit() {
    this.productoList = this.productoService.getProducts()
  }
  getProducto(product: Producto) {
    this.productoService.setProduct(product)
    this.router.navigate(["/modificar"])
  }
}
