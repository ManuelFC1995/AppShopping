import { Injectable } from '@angular/core';

import { HttpHeaders,HttpClient,HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
'rxjs/Rx';
@Injectable()
export class ProveedoresService {
    presURL= 'https://shoppingapp-62f5e.firebaseio.com/proveedores.json'
    preURL = 'https://shoppingapp-62f5e.firebaseio.com/proveedores';

 constructor(public http: HttpClient) { }

 
 postProveedores( proveedor: any) {
    const newprov = JSON.stringify(proveedor);
    const headers = new HttpHeaders({ 
    'Content-Type': 'application/json'
    });
    return this.http.post( this.presURL, newprov, {headers}).pipe
    (map( res => {
    console.log(res); 
    return res;
    }));
  }
  getProveedores(){
    return this.http.get(this.presURL).pipe(map(res=>res));
  
  }
  getProveedor ( id$: string ) {
    const url = `${ this.preURL }/${ id$ }.json`; 
    return this.http.get( url ).pipe(
    map( res => res));
    }
    putProveedor( presupuesto: any, id$: string) { 
      const newprov = JSON.stringify(presupuesto);
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
      const url = `${ this.preURL }/${ id$ }.json`; 
      return this.http.put( url, newprov, {headers}).pipe(
      map( res => {
      console.log(res);
      return res;
      }));
  }
  
  delProveedor ( id$: string ) {
    const url = `${ this.preURL }/${ id$ }.json`;
    return this.http.delete( url )
    .pipe(map( res => res));
  }
}
