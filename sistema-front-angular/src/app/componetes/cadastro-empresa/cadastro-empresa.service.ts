import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Empresa } from './cadastro-empresa.component';
@Injectable({
  providedIn: 'root'
})
export class CadastroEmpresaService {


  constructor(protected http: HttpClient) { }


  listaEmpresa(): Observable<any>{
   return this.http.get(`${environment.API}/empresas`).pipe(take(1));
  }




  salvarEmpresa(empresa: Empresa) : Observable<any>{ 
    return this.http.post(`${environment.API}/empresas/`, empresa).pipe(take(1));

  }
 
  
}
