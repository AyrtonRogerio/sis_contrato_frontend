import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  listaMenu = [{"cod":1, "descricao":"Empresa"},
   {"cod":1, "descricao":"Empresa"},
    {"cod":2, "descricao":"Usuário"},
    {"cod":3, "descricao":"Promissórias"},
    {"cod":4, "descricao":"configurações"}
  ]

  constructor() { }

  ngOnInit(): void {
   
  }

 
}

