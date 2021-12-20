import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './componetes/cadastro-cliente/cadastro-cliente.component';
import { CadastroContratoComponent } from './componetes/cadastro-contrato/cadastro-contrato.component';
import { CadastroEmpresaComponent } from './componetes/cadastro-empresa/cadastro-empresa.component';
import { HomeComponent } from './componetes/home/home.component';
import { LoginComponent } from './componetes/login/login.component';
import { PromissoriaComponent } from './componetes/promissoria/promissoria.component';

const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path : "cadastro-cliente", component: CadastroClienteComponent},
  {path : "cadastro-contrato", component: CadastroContratoComponent},
  {path : "cadastro-empresa", component: CadastroEmpresaComponent},
  {path : "promissoria", component: PromissoriaComponent},

  {path : "", component: CadastroEmpresaComponent},
  {path : "**", component: CadastroEmpresaComponent},
  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
