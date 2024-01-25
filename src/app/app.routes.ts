import { Routes } from '@angular/router';
import {ComprarComponent} from "./comprar/comprar.component";
import path from "node:path";
import {AumentarComponent} from "./aumentar/aumentar.component";
import {ModificarComponent} from "./modificar/modificar.component";

export const routes: Routes = [
  {path:"", component: ComprarComponent},
  {path:"añadir", component: AumentarComponent},
  {path:"modificar", component:ModificarComponent}
];
