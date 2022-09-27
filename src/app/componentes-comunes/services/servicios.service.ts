import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { throwError, Observable } from 'rxjs';
import { environment } from "src/environments/environment";




@Injectable({
    providedIn: 'root'
})


export class Servicios {  
          // lo trae del enviroment dependiendo del ambiente
    BASE_URL_STT = environment.BASE_URL_STT;

    constructor(private https: HttpClient) {
        // console.log('Ingresa a Servicios.');
    }

 /**
     * 
     * @param pUrl url del microservicio a consumir ejemplo http://host.microservicio/metodoPost
     * @param pParametro parametro del metodo post este puede ser null si no lleva parametro
     * @param pBody body del servicio con la estructura de la interface servicioBody obtiene la variable 
     *              body de la interface que debe contener la estructura de envio del microservicio si se
     *              necesita agregar una nueva estructura se debe agregar en la interface
     * @param pJSON true cuando el metodo tiene content-type application-json, false si no tiene content-type
     */
  public postData(pUrl: string, pNombreServicio: string | null, pBody: Object, pJSON: boolean = true): Observable<any> {
    if (pNombreServicio === null) {
        return this.https.post(pUrl, pBody, this.generateHeaders(pJSON));
    } else {
        return this.https.post(`${pUrl}/${pNombreServicio}`, pBody, this.generateHeaders(pJSON));
    }
}


 /**
     * funcion para crear el headers que se enviara en los servicios
     * @param json agrega si el contenido sera de tipo json
     * @author cesalgue carlos salguero
     */
  public generateHeaders(json: boolean = false): object {
    let headers: HttpHeaders;
    if (json) {
        headers = new HttpHeaders({
            'Accept': '*/*',
            'Content-Type': 'application/json'
        });
    } else {
        headers = new HttpHeaders({
            'Accept': '*/*'
        });
    }
    //console.log('header a enviar:', JSON.stringify(headers));
    let httpOptions: object = { "headers": headers };
    return httpOptions;
}

 }


