import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
// title:string='Login Clase3';
rompeTexto:string="Hola soy un texto a romper abcdeeeee ccccccc";
// hoy:Date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
