import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Cliente } from '../cadastro-cliente/cadastro-cliente.component';
import { Empresa } from '../cadastro-empresa/cadastro-empresa.component';
import { CadastroContratoService } from './cadastro-contrato.service';

@Component({
  selector: 'app-cadastro-contrato',
  templateUrl: './cadastro-contrato.component.html',
  styleUrls: ['./cadastro-contrato.component.css']
})
export class CadastroContratoComponent implements OnInit {


  listaEmpresa!: Empresa[]
  listaCliente!: Cliente[]

  formulario!: FormGroup;

  listclinte: any[] = []
  constructor(
    private formBuider: FormBuilder,
    private service: CadastroContratoService
  ) { }



  ngOnInit(): void {
    this.listaContrato()
    this.EmpresaList()
    this.Clientelist()

    this.formulario = this.formBuider.group({

      empresa: ['', Validators.required],
      cliente: [''],
      valor:[null],
      parcelas:[null],
      descricao:[null]

    });


  }
  //fução pra testar API 
  listaContrato() {
    this.service.listaContrato()
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

    const contrato = this.montarContrato()
    if (this.validaCampos()) {
      this.service.salvarEmpresa(contrato)
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


  limparCampos(): void {
    this.formulario.get('nome')!.setValue('')
    this.formulario.get('cnpj')!.setValue('')

  }

  EmpresaList() {
    this.service.listaEmpresa()
      .subscribe(
        (data: any) => {
          this.listaEmpresa = data
          console.log(this.listaEmpresa)
        },
        error => {
          console.log(error)
        }
  
      );
  
  }

  Clientelist() {
    this.service.listaCliente()
      .subscribe(
        (data: any) => {
          this.listaCliente = data 
          console.log(this.listaEmpresa)
        },
        error => {
          console.log(error)
        }
  
      );
  
  }


  validaCampos(): boolean {
    return this.formulario.valid ? true : false

  }

  montarContrato(): Contrato {
    const { cliente, empresa, parcelas, valor, descricao} = this.formulario.getRawValue()
    return {
      cliente_id : cliente,
      descricao:descricao,
      empresa_id : empresa,
      valor_total: valor,
      qtd_nota_promissoria: parcelas
    }
}
}
export interface Contrato {
  id?: number; 
  cliente_id: number;
  empresa_id: number;
  descricao: string
  valor_total : number
  qtd_nota_promissoria  :number
}