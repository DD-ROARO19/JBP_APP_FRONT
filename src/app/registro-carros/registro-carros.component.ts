import { Component } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-registro-carros',
  templateUrl: './registro-carros.component.html',
  styleUrls: ['./registro-carros.component.css']
})
export class RegistroCarrosComponent {

  constructor(public Serviciologin: LoginService){}

  cerrarsesion(){
    this.Serviciologin.logout();
  }
}
