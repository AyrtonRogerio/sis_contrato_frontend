import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CadastroClienteService } from './cadastro-cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  constructor(
    private service : CadastroClienteService
  ) { }

  ngOnInit(): void {
  }
  teste(){
    this.service.funcaoTeste().subscribe(response => {
      console.log(response);
        
        },
      (error: HttpErrorResponse) => {
        if (error.error.codigo_status_http === 404) {
          console.log(error);
        }
        console.log(error);
      });
    


}
}
