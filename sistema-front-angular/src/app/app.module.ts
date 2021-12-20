import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componetes/home/home.component';
import { LoginComponent } from './componetes/login/login.component';
import { MenuComponent } from './componetes/menu/menu.component';
import { CadastroClienteComponent } from './componetes/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './componetes/cadastro-empresa/cadastro-empresa.component';
import { CadastroContratoComponent } from './componetes/cadastro-contrato/cadastro-contrato.component';
import { PromissoriaComponent } from './componetes/promissoria/promissoria.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    CadastroClienteComponent,
    CadastroEmpresaComponent,
    CadastroContratoComponent,
    PromissoriaComponent,
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    HttpClientModule
   
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
