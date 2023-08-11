import { Component, OnInit } from '@angular/core';

//Servicios
import { LoginService } from '../servicios/login.service';
import { AutosService } from '../servicios/autos.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor( private AutoS:AutosService, private LoginS:LoginService ){}

  autos:any;
  entregados:any;

  ngOnInit(): void {

    // this.autos = this.AutoS.getAll(this.LoginS.getSucursal());

    // AUTOS GUARDADOS
      this.AutoS.getAll().subscribe({
        next: res => {
          console.log(res);
          this.autos = res;
        },
        error: err => { console.log(err); }
      });

      //YA ENTREGADOS
      this.AutoS.getAllEn().subscribe({
        next: res => {
          console.log(res);
          this.entregados = res;
        },
        error: err => { console.log(err); }
      });

  }



}
