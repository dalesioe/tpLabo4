import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(usuario:string, pass:string)
  {
    let data;
    this.http.traerUsuario(usuario,pass).then(datos=>data=datos).catch(err=>console.log(err));
    return data;
  }
}
