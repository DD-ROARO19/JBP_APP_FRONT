import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario="";
  password="";

constructor(public Serviciologin: LoginService){}

iniciosesion(){
  if(this.usuario=="admin" && this.password=="1203"){
// alert("Bienvenido "+this.usuario);
  this.Serviciologin.login();
  }
  else{
    // alert("Usuario o contraseña incorrectos");
  }
}
}
