import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { Jugador } from '../../clases/jugador';
import { HttpService } from '../../servicios/http.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jugadores: Jugador;
  usuario: string;
  pass: string;
  constructor(private router: Router, private serviceHttp: Http) { }

  ngOnInit() {
  }

  Ingresar() {
    let datos = { mail: this.usuario, password: this.pass };
    this.serviceHttp.post('http://localhost:8080/Api/LoginUsuario', datos)
      .toPromise()
      .then(()=>
        this.router.navigate(['Juegos'])
      )
      .catch(err=>console.log(err));
  }
}
