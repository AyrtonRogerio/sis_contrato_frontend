import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(protected http: HttpClient) { }

  funcaoTeste(): Observable<any>{
    return this.http.get(`/api/empresas`).pipe(take(1));
   }
}
