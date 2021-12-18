import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import {} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any;

  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.formLogin =  this.fb.group({
      nome: ['', Validators.compose([Validators.required])],
      Email: ['', Validators.compose([Validators.required])],
    })
    
  }



  logar(){
  

  }

}
