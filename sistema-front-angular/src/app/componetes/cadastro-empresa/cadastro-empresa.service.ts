import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CadastroEmpresaService {


  constructor(protected http: HttpClient) { }


  funcaoTeste(): Observable<any>{
   return this.http.get(`${environment.API}/empresas`).pipe(take(1));
  }
  caoTeste(): Observable<any>{
    return this.http.get(`${environment.API}\empresas`).pipe(take(1));
   }
 
  
}
