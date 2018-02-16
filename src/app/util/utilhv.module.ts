import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Registro } 			from './Usuarios/registro.component';
import { ValSessionComponent } 	from './Usuarios/ValSesion.component';
import { AuthService } 			from './Usuarios/auth-service.service';
import { SesionUsuario } 		from './Usuarios/SesionUsuario.service';
import { UtilS } 				from './util-s.service';


@NgModule({
  imports: [CommonModule],
  declarations: [
  	Registro, ValSessionComponent
  ],
  providers: [AuthService, UtilS, SesionUsuario],
  exports: [Registro, ValSessionComponent, AuthService]
})
export class UtilHVModule {
}

/*export { AuthService } 			from './Usuarios/auth-service.service';
export { SesionUsuario } 		from './Usuarios/SesionUsuario.service';
export { UtilS } 				from './util-s.service';*/