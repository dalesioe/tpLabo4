import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdivinaComponent } from './componentes/adivina/adivina.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { RuteoModule } from './ruteo/ruteo.module';
import { Http, HttpModule} from '@angular/http';
import {HttpService} from './servicios/http.service';
import {LoginService} from './servicios/login.service';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    LoginComponent,
    AdivinaComponent,
    PptComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    RuteoModule,
    FormsModule,
    HttpModule
    //DataGridModule
  ],
  providers: [HttpService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
