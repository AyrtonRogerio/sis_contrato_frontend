import { Component, OnInit } from '@angular/core';
import { CadastroEmpresaService } from './cadastro-empresa.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {


  formulario!: FormGroup;

  empresaList! : Empresa[] 
  constructor(
    private formBuider: FormBuilder,
    private service: CadastroEmpresaService
  ) { }



  ngOnInit(): void {
    this.listaEmpresa()
    this.formulario = this.formBuider.group({

      nome: ['', Validators.required],
      cnpj: [null],

    });


  }
  //fução pra testar API 
  listaEmpresa() {
    this.service.listaEmpresa()
      .subscribe(
        (data: any) => {
          this.empresaList = data
        },
        error => {
          console.log(error)
        }

      );

  }

  OnSubmit() {

    const empresa = this.montarEmprsa()
    if (this.validaCampos()) {
      this.service.salvarEmpresa(empresa)
        .subscribe(
          data => {
            console.log("Foi")
            alert("Salvo")
            this.limparCampos()
            this.listaEmpresa()
     
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
    this.formulario.get('cnpj')!.setValue('')

  }


  validaCampos(): boolean {
    return this.formulario.valid? true : false

  }

  montarEmprsa(): Empresa {
    const { nome, cnpj } = this.formulario.getRawValue()
    return {
      nome: nome,
      cnpj: cnpj
    }
  }
}

export interface Empresa {
  id?:number
  nome: string;
  cnpj: string
}
