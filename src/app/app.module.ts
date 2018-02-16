import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';
import { RouterModule } 	from '@angular/router';
import { HttpModule }       from '@angular/http';
import { MaterialModule } 	from './material.module';

import { UtilHVModule } 	from './util/utilhv.module';

import { AppComponent } 		from './app.component';
import { InicioComponent } 		from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MaterialModule, UtilHVModule,
     RouterModule.forRoot([
            { path: '',                  component: InicioComponent  },
            { path: 'inicio',            component: InicioComponent }
           /* { path: 'nomina',            component: NominaComponent ,   canActivate:[Privada]},
            { path: 'pedidos',           component: PedidosComponent,   canActivate:[Privada]  },
            { path: 'carga',             component: CargaComponent,     canActivate:[Privada]  },
            { path: 'confronta',         component: ConfrtDiaComponent, canActivate:[Privada]  },
            { path: 'gastos',            component: GastosComponent,    canActivate:[Privada]  }*/
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
