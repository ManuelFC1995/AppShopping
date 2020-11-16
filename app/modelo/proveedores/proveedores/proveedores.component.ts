import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = [];
  constructor(private proveedoresService: ProveedoresService) {
    this.proveedoresService.getProveedores()
    .subscribe(proveedores => {
    for ( const id$ in this.proveedores) {
    const p = this.proveedores[id$];
    p.id$ = id$;
    this.proveedores.push(this.proveedores[id$]);
    }
    })
   }

  ngOnInit(): void {
   

  }
  eliminarPresupuesto(id$) {
    this.proveedoresService.delProveedor(id$)
    .subscribe( res => {
    this.proveedores = [];
    this.proveedoresService.getProveedores()
    .subscribe(presupuestos => {
    for ( const id$ in this.proveedores) {
    const p = this.proveedores[id$];
    p.id$ = id$;
    this.proveedores.push(this.proveedores[id$]);
    }
    })
    });
    }
}
