import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {ComprarComponent} from "./comprar/comprar.component";
import {AumentarComponent} from "./aumentar/aumentar.component";
import {ModificarComponent} from "./modificar/modificar.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComprarComponent,
    AumentarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
