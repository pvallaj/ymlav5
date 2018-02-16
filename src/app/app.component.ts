import { Component } from '@angular/core';
import { SesionUsuario } from './Util/Usuarios/SesionUsuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor (private su:SesionUsuario){
		console.log(su);
	}
  title = 'app';
  private mostratMenu:boolean=false;
  terminarSesion(){
  	this.su.cerrarSesion();
  }
}
