import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegos: Object[];
  constructor() {
    this.juegos = [
      { nombre: 'Adivina el numero', imagen: 'adivina', link: '/adivina', color: 'Black' },
      { nombre: 'Piedra Papel Tijera', imagen: 'ppt', link: '/ppt', color: 'White' },
      { nombre: 'Juego 3', imagen: 'juego3', link: '/juego3', color: 'Blue' },
      { nombre: 'Puntaje', imagen: 'puntaje', link: '/puntaje', color: 'Blue' },
      { nombre: 'Acerca de', imagen: 'acercade', link: '/acercade', color: 'Blue' }
    ];
   }

  ngOnInit() {
  }

}
