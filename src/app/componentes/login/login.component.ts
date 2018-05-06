import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';
import { Jugador } from '../../clases/jugador';
import { HttpService } from '../../servicios/http.service';
import { Http } from '@angular/http';
import swal from 'sweetalert2';
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
      swal({
        title: 'Bienvenido ',
        text: 'Accediendo a la plataforma de juegos!.',
        timer: 2000,
        onOpen: () => {
          swal.showLoading()
        }
      }).then((result) => {
        if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
        this.router.navigate(['Juegos']);
      })
      )
      .catch( ()=>swal(
        'Error',
        'Usuario o contraseña invalidos',
        'error'
      ));
  }
}
