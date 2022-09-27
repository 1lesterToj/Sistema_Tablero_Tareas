import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes-usuario/login/login.component';
import { SignUpComponent } from './Componentes-usuario/sign-up/sign-up.component';
import { TableroPublicoComponent } from './tablero-publico/tablero-publico.component';

const routes: Routes = [

  {
    path: 'tablero-publico',
    component: TableroPublicoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'sign-up',
    component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
