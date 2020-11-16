import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';


import * as proveedoresComponent from './modelo/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';

import { AddproveeComponent } from './modelo/proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { HeaderComponent } from './header/header.component';
import { FacturasComponent } from './facturas/facturas/facturas.component';




@NgModule({
  declarations: [
    AppComponent,
    proveedoresComponent.ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    FacturasComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  
  providers: [ProveedoresService, PresupuestosService,AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
