import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/login';

  constructor( private router: Router, private http: HttpClient) { }

  login(cuenta: object){
    return this.http.post<any>(this.url, cuenta).pipe(map( i => i.cuenta ));
  }

  llenarDatos(res:any){
    localStorage.setItem("cuenta", res.UID);
    localStorage.setItem("sucursal", res.sucursal);
    // localStorage.setItem( "token", res.token );
    if (res.admin) {
      localStorage.setItem("control", res.admin);
    }
  }

  logout(){
    localStorage.clear();
  }//cierre de logout

  eslogueado():boolean{
    if(localStorage.getItem("cuenta")!=null){
      return true;
    }else{
return false;
    }
  }

  esAdmin():boolean {
    if(localStorage.getItem('control') != null){
      return true;
    }else{
      return false;
    }
  }

  getCuenta(){
    return localStorage.getItem('cuenta');
  }

  getSucursal(){
    return localStorage.getItem('sucursal');
  }

  // Para cuendo sirva.
  // getToken(){
  //   return localStorage.getItem('token');
  // }

}
