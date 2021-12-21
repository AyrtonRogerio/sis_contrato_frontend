import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contrato } from '../cadastro-contrato/cadastro-contrato.component';
import { PromissoriaService } from './promissoria.service';




@Component({
  selector: 'app-promissoria',
  templateUrl: './promissoria.component.html',
  styleUrls: ['./promissoria.component.css']
})
export class PromissoriaComponent implements OnInit {

  formulario!: FormGroup;
  listaContrato!: Contrato []
  listapromissoria!: Promissoria []

  constructor(
    private formBuider: FormBuilder,
    private service: PromissoriaService

  ) { }

  ngOnInit(): void {
    this.listaPromissoria()
    this.buscarContrato()

    this.formulario = this.formBuider.group({
      valor: ['', Validators.required],
      contrato: [''],


    });


  }
  //fução pra testar API 
  listaPromissoria() {
    this.service.listaPromissoria()
      .subscribe(
        (data: any) => {
          this.listapromissoria = data
        },
        error => {
          console.log(error)
        }

      );
  }

  
  buscarContrato() {
    this.service.buscarContrato()
      .subscribe(
        (data: any) => {
          this.listaContrato = data
        },
        error => {
          console.log(error)
        }

      );
  }


  OnSubmit() {

    const promissoria = this.montarPromissoria()
    if (this.validaCampos()) {
      this.service.salvarPromissoria(promissoria)
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
      alert("Campos Inválidos")
      console.log(this.formulario)
    }

  }

  limparCampos(): void {
    this.formulario.get('valor')!.setValue('')
    this.formulario.get('contrato')!.setValue('')
  }


  validaCampos(): boolean {
    return this.formulario.valid ? true : false
  }





  montarPromissoria(): Promissoria {
    const { valor, contrato } = this.formulario.getRawValue()
    return {
      valor: valor,
      contrato_id: contrato
    }

  }
}
export interface Promissoria {
  id?: number
  valor: number
  contrato_id: number
}
