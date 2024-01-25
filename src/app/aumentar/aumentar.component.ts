import { Component } from '@angular/core';
import { Producto } from '../Modelos/producto';
import { AñadirService } from '../añadir.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-aumentar',
  templateUrl: './aumentar.component.html',
  styleUrl: './aumentar.component.css'
})
export class AumentarComponent {
  product: Producto = {
    id: 0,
    nombre: '',
    cantidad: 0,
    precio: 0.0
  };

  constructor(private service: AñadirService, private route: Router) {

  }
  anadirProducto(producto: Producto) {
    this.service.setProduct(producto)
    this.service.añadirProduct()
    this.route.navigate(["/"])
  }
}
