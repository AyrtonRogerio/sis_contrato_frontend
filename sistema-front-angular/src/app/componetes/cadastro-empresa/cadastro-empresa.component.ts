import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CadastroEmpresaService } from './cadastro-empresa.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  constructor(
    private service : CadastroEmpresaService
    ) { }

  ngOnInit(): void {
    this.teste()
  }
//fução pra testar API 
  teste(){
    this.service.funcaoTeste().subscribe(response => {
      console.log(response);
        
        },
      (error: HttpErrorResponse) => {
       
        console.log(error);
      });
    

  }

  

}
