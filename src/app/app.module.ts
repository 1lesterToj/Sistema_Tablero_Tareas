import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './componentes-comunes/utils/material-module';
import { TableroPublicoComponent } from './tablero-publico/tablero-publico.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Componentes-usuario/login/login.component';
import { SignUpComponent } from './Componentes-usuario/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroPublicoComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
