import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

hide:boolean = true;
showuser:boolean=false;
emailStatus:string="";

rompeTexto:string="Hola soy un texto a romper abcdeeeee ccccccc";
miNumero:string="992115685";
// hoy:Date=new Date();

title:string='Login Clase3';
loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private router: Router

  ) { 
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email, Validators.minLength(5)]]
      , password: [null, [Validators.required, Validators.minLength(6)]]
});

  }

  ngOnInit(): void {
    this._authService.checkCurrentUser().then(res =>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })

  }

  public async onSubmit(): Promise<any> {
    //console.log(this.loginForm);
    const { email, password } = this.loginForm.controls;
    const validate: boolean = this.validateField(email, password);
    if (validate) {
      // alert(`email: ${email.value}, password: ${password.value}`);
      this._authService.singIn(email.value, password.value).then((res: firebase.auth.UserCredential) => {
        console.log(JSON.stringify(res));
        this.showuser=true;
        this.emailStatus=res.user.emailVerified ? "Verificado" : "No verificado";
        this.router.navigate(['/inicio']);
      })
    }
  }

public validateField(email:AbstractControl, password:AbstractControl):boolean{
  if(this.loginForm.valid)  {
    return true;
  }
  if(!email.valid && !password.valid){
    alert('Los campos son obligatorios');
    return false;
  }
  if(!email.valid){
    alert('el email es incorrecto')
    return false;
  }
  if(!password.valid){
    alert('el password es incorrecto')
    return false;
  }

  return true;
}


}
