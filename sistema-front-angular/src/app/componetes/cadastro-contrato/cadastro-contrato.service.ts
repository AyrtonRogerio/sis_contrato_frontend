import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Contrato } from './cadastro-contrato.component';

@Injectable({
  providedIn: 'root'
})
export class CadastroContratoService {

 
  constructor(protected http: HttpClient) { }


  listaContrato(): Observable<any>{
   return this.http.get(`${environment.API}/contratos`).pipe(take(1));
  }


  listaEmpresa(): Observable<any>{
    return this.http.get(`${environment.API}/empresas`).pipe(take(1));
   }

   listaCliente(): Observable<any>{
    return this.http.get(`${environment.API}/clientes`).pipe(take(1));
   }

   

  salvarEmpresa(empresa: Contrato){
    return this.http.post(`${environment.API}/contratos/`, empresa).pipe(take(1));

  }
 
  
}
