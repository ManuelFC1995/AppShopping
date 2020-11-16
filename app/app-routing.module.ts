import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';

import { InicioComponent } from './inicio/inicio.component';
import { AddproveeComponent } from './modelo/proveedores/addprovee/addprovee.component';
import { ProveedoresComponent } from './modelo/proveedores/proveedores/proveedores.component';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [

  { path: '', component: InicioComponent },
{ path: 'proveedores', component: ProveedoresComponent,canActivate:[GuardService] } ,
{ path: 'addprovee', component: AddproveeComponent,canActivate:[GuardService]},
{ path: 'addpres', component: AddpresComponent,canActivate:[GuardService]},
{ path: 'presupuestos', component: PresupuestosComponent,canActivate:[GuardService] },
{ path: 'editpres/:id', component: PresupuestosComponent,canActivate:[GuardService] },
{ path: 'registro', component: RegistroComponent },
{ path: 'iniciosesion', component: InisesComponent },
{ path: '**', component: InicioComponent},


];

@NgModule({
  imports: [
     BrowserModule,
     RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
