import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../componentes/login/login.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { AdivinaComponent } from '../componentes/adivina/adivina.component';
import { PptComponent } from '../componentes/ppt/ppt.component';
import { AhorcadoComponent } from '../componentes/ahorcado/ahorcado.component';
import { RouterModule, Route } from '@angular/router';


const MiRuteo = [
  {path: '' , component: LoginComponent},
  { path: 'Juegos' ,
  component: JuegosComponent ,
  children:
       [{path: 'Adivina' , component: AdivinaComponent},
       {path: 'PPT', component: PptComponent},
       {path: 'Ahorcado', component: AhorcadoComponent}]
  }];

@NgModule({
  imports: [
     RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteoModule { }
