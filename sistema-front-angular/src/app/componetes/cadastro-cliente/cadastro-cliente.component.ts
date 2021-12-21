import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CadastroClienteService } from './cadastro-cliente.service';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  
  formulario!: FormGroup;

  listclinte: any[] = []
  constructor(
    private formBuider: FormBuilder,
    private service: CadastroClienteService
  ) { }



  ngOnInit(): void {
    this.listaCliente()
    this.formulario = this.formBuider.group({

      nome: ['', Validators.required],
      rg: [null],
      cpf:[null],
      telefone: [null],
      endereco_id: [null],

    });


  }
  //fução pra testar API 
  listaCliente() {
    this.service.listaCliente()
      .subscribe(
        (data: any) => {
          this.listclinte = data
        },
        error => {
          console.log(error)
        }

      );

  }

  OnSubmit() {

    const cliente = this.montarEmprsa()
    if (this.validaCampos()) {
      this.service.salvarEmpresa(cliente)
        .subscribe(
          data => {
            console.log("Foi")
            alert("Salvo")
            this.limparCampos()
     
          },
          error => {
            console.log(error)
          }
        )
    } else {
      alert("campos invalidos")
      console.log(this.formulario)
    }
  }


  limparCampos():void{
    this.formulario.get('nome')!.setValue('')
    this.formulario.get('cpf')!.setValue('')
    this.formulario.get('rg')!.setValue('')
    this.formulario.get('telefone')!.setValue('')
    this.formulario.get('endereco_id')!.setValue('')

  }


  validaCampos(): boolean {
    return this.formulario.valid ? true : false

  }

  montarEmprsa(): Cliente {
    const { nome, rg, cpf, telefone, endereco_id} = this.formulario.getRawValue()
    return {
      nome: nome,
      rg: rg,
      endereco_id: endereco_id,
      cpf:cpf,
      telefone:telefone

    }
  }
}

export interface Cliente {
  id?:number
  nome: string;
  rg: string;
  cpf: string;
  telefone: string;
  endereco_id: string;
}
