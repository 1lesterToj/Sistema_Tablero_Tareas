import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { firstValueFrom } from 'rxjs';
import { Servicios } from '../componentes-comunes/services/servicios.service';

@Component({
  selector: 'app-tablero-publico',
  templateUrl: './tablero-publico.component.html',
  styleUrls: ['./tablero-publico.component.css']
})
export class TableroPublicoComponent implements OnInit {
  title = 'Sistema_Tablero_Tareas';
  parametros: any;

  headerColumnNames: string[] = ['no', 'fecha', 'solicitante', 'dependencia', 'tipo', 'estado', 'diasRestantes', 'accion'];
  dataSource = new MatTableDataSource();
  constructor(private servicio: Servicios, private spinner: NgxSpinnerService){
  };

  ngOnInit(): void {
    this.datosTablero();
  }

  detalle() {
  }

async datosTablero() {
   console.log('hola')
   this.parametros= {
     Accion : 1,
     WsGestionTablero: []
   }
   this.spinner.show();
   const data$ = this.servicio.postData(`${this.servicio.BASE_URL_STT}`, `WsGestionTareas`, this.parametros)
 await firstValueFrom(data$).then(res=>{
   console.log(res,'imprime')
   this.spinner.hide();

 }).catch(error =>{
   console.error(error);

 })
 }


}
