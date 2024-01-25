import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelos/producto';
import { AñadirService } from '../añadir.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit {
  product: Producto | undefined
  constructor(private productoService: AñadirService, private route: Router) {

  }
  ngOnInit(): void {
    this.product = this.productoService.getProduct()
  }

  modProducto(producto: Producto) {

    this.productoService.setProduct(producto)
    this.productoService.modifiProducts()
    this.route.navigate(["/"])


  }

}
