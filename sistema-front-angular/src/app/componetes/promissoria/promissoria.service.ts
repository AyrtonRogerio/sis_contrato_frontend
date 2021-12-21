import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Promissoria } from './promissoria.component' 

@Injectable({
  providedIn: 'root'
})
export class PromissoriaService {

  constructor(protected http: HttpClient) { }
  
  
  listaPromissoria(): Observable<any>{
    return this.http.get(`${environment.API}/notaspromissorias`).pipe(take(1));
   }
 
   salvarPromissoria(promissoria: Promissoria) : Observable<any>{ 
     return this.http.post(`${environment.API}/notaspromissorias/`, promissoria).pipe(take(1));
 
   }

   buscarContrato(): Observable<any>{
    return this.http.get(`${environment.API}/contratos`).pipe(take(1));
   }
}
