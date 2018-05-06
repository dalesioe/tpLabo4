import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:Http) { }

  traerUsuario(usuario:string, pass:string)
  {
   
    let body= new Jugador();
    body.mail = usuario;
    body.password=pass;
    return this.http.post("http://localhost:8080/api/LoginUsuario",body).toPromise();
  }
}
