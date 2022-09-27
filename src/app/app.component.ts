import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { firstValueFrom } from 'rxjs';
import { Servicios } from './componentes-comunes/services/servicios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema_Tablero_Tareas';
  parametros: any;

  headerColumnNames: string[] = ['no', 'fecha', 'solicitante', 'dependencia', 'tipo', 'estado', 'diasRestantes', 'accion'];
  dataSource = new MatTableDataSource();
  constructor(private servicio: Servicios, private spinner: NgxSpinnerService){
  };

  ngOnInit() {
    this.datosTablero();
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
    console.log(res,'imprime--->')
    this.spinner.hide();

  }).catch(error =>{
    console.error(error);

  })
  }

}
