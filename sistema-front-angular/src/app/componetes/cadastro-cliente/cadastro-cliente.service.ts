import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Cliente } from './cadastro-cliente.component';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(protected http: HttpClient) { }



   
  listaCliente(): Observable<any>{
    return this.http.get(`${environment.API}/clientes`).pipe(take(1));
   }
 
 
 
 
   salvarEmpresa(cliente: Cliente){
     return this.http.post(`${environment.API}/clientes/`, cliente).pipe(take(1));
 
   }
}
