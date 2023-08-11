import { Component, OnInit } from '@angular/core';

//servicios
import { LoginService } from '../servicios/login.service';
import { AutosService } from '../servicios/autos.service';

@Component({
  selector: 'app-registro-carros',
  templateUrl: './registro-carros.component.html',
  styleUrls: ['./registro-carros.component.css']
})
export class RegistroCarrosComponent implements OnInit {

  constructor(public Serviciologin: LoginService, private AutoS:AutosService){}

  EmpNombre:any = "";

  datos = {
    nombre: "",
    marca: "",
    modelo: "",
    placa: "",
    color: "",
    sucursal: "",
    espacio: "",
    estado: "",
    hora: ""
  }

  ngOnInit(): void {
      this.EmpNombre = this.Serviciologin.getCuenta();
  }

  cerrarsesion(){
    this.Serviciologin.logout();
  }

  limpiarDatos(){
    this.datos.nombre = "",
    this.datos.marca = "",
    this.datos.modelo = "",
    this.datos.placa = "",
    this.datos.color = "",
    this.datos.sucursal = "",
    this.datos.espacio = "",
    this.datos.estado = ""
  }

  llenarDatos(e:any){
    this.datos.nombre = e.nombre,
    this.datos.marca = e.marca,
    this.datos.modelo = e.modelo,
    this.datos.placa = e.placa,
    this.datos.color = e.color,
    this.datos.sucursal = e.sucursal,
    this.datos.espacio = e.espacio,
    this.datos.estado = e.estado
  }

  consultarDatos(){
    this.AutoS.getAuto(this.datos).subscribe({
      next: res => {
        this.llenarDatos(res);
      },
      error: err => {
        console.log('Enviado:',this.datos,'\nRecibido:',err);
      }
    });
  }

  guardarDatos(){
    this.AutoS.guardarAuto(this.datos).subscribe({
      next: res => {
        alert(res.msg);
        this.limpiarDatos();
      },
      error: err => {
        console.log('Enviado:',this.datos,'\nRecibido:',err);
      }
    });
  }

  borrarDatos(){

  }

  cobrar(){
    this.AutoS.cobrarAuto(this.datos).subscribe({
      next: res => {
        alert(res.msg);
        this.limpiarDatos();
      },
      error: err => {
        console.log('Enviado:',this.datos,'\nRecibido:',err);
      }
    });
  }

}
