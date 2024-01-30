import { Component, OnInit } from '@angular/core';
import { Producto } from '../Modelos/producto';
import { AñadirService } from '../añadir.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit {
  product: Producto | undefined
  productId: number | undefined
  id: string | null = null
  accion: string | null = null
  constructor(private productoService: AñadirService, private route: Router, private route2: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.product = this.productoService.getProduct()

    this.route2.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('ID:', this.id);
    });

    // Obtener el valor del parámetro de consulta 'accion' de la URL
    this.route2.queryParams.subscribe(queryParams => {
      this.accion = queryParams['accion'];
      console.log('Accion:', this.accion);
    });


  }

  modProducto(producto: Producto) {

    this.productoService.setProduct(producto)
    this.productoService.modifiProducts()
    this.route.navigate(["/"])

    this.productoService.eliminarProduct()
  }

}
