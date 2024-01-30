import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarComponent } from "./modificar/modificar.component";
import { AumentarComponent } from "./aumentar/aumentar.component";
import { ComprarComponent } from "./comprar/comprar.component";

const routes: Routes = [
  { path: "", component: ComprarComponent },
  { path: "añadir", component: AumentarComponent },
  { path: "modificar/:id", component: ModificarComponent },
  { path: "**", component: ModificarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
