import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AumentarComponent } from './aumentar/aumentar.component';
import { ComprarComponent } from './comprar/comprar.component';
import { HeaderComponent } from './header/header.component';
import { ModificarComponent } from './modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    AumentarComponent,
    ComprarComponent,
    HeaderComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
