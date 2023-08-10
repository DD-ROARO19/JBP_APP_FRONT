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

  datos = {
    cuenta: "",
    contra: ""
  }

constructor(public Serviciologin: LoginService){}

  iniciosesion(){

    this.datos.cuenta = this.usuario;
    this.datos.contra = this.password;

    this.Serviciologin.login(this.datos).subscribe({
      next: res => {
        this.Serviciologin.llenarDatos(res);
      },
      error: err => {
        console.log("Enviado:",this.datos,"\nRecivido",err);
      }
    });

  }

}
