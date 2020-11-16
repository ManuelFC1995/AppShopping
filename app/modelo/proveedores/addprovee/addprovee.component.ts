
import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';

import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  
  
  proveedoresForm:FormGroup;

  proveedor: any;

  nombre:any;
  cif:any;
  direccion:any=0;
  cp:any=0;
  localidad:any;
  provincia:any;
  telefono:any;
  email:any;
   provincias: string[] = [
'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
'Zamora','Zaragoza' ]
  constructor(private pf: FormBuilder,private ProveedoresService:ProveedoresService){
  
}
onSubmit(){
  this.proveedor = this.saveProveedor();
  this.ProveedoresService.postProveedores( this.proveedor )
  .subscribe(newprov => {
  })

  }
  saveProveedor() {
    const saveProveedor = {
    nombre: this.proveedoresForm.get('nombre').value,
    cif: this. proveedoresForm.get('cif').value,
    direccion: this.proveedoresForm.get('direccion').value,
    cp: this.proveedoresForm.get('cp').value,
    localidad: this.proveedoresForm.get('localidad').value,
    provincia: this.proveedoresForm.get('provincia').value,
    telefono: this.proveedoresForm.get('telefono').value,
    email: this.proveedoresForm.get('email').value,
    contacto: this.proveedoresForm.get('contacto').value
    };
    return saveProveedor;
    }
  ngOnInit(): void {
    this.proveedoresForm= this.pf.group({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', Validators.required],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: '',
      telefono: null,
      email: ['', Validators.required],contacto: ''
      });
  }

}
