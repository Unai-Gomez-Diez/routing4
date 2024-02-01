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
    id: string | null = null
  accion: string | null = null
  constructor(private productoService: AñadirService, private route: Router, private route2: ActivatedRoute) {

  }

  ngOnInit(): void {


    this.route2.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('ID:', this.id);
    });

    // Obtener el valor del parámetro de consulta 'accion' de la URL
    this.route2.queryParams.subscribe(queryParams => {
      this.accion = queryParams['accion'];
      console.log('Accion:', this.accion);
    });
    if (this.id){
      let parse =parseInt(this.id)+1
      this.productoService.getById(parse.toString())
    }
    this.product = this.productoService.getProduct()
  }

  modProducto(producto: Producto) {
    this.productoService.setProduct(producto)
    // @ts-ignore
    if (this.accion == 1){

      this.productoService.modifiProducts()
    }else { // @ts-ignore
      if(this.accion == 2){
            this.productoService.eliminarProduct()
      }
    }
    this.route.navigate(["/"])
  }

}
