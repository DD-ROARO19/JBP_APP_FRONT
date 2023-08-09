import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private router: Router, private http: HttpClient) { }
  login(){
    localStorage.setItem("usuario", "admin");
    this.router.navigate(["/inicio"]);
  }
  logout(){
    //removeItem elimina una sola variable del localStorage
    //localStorage.removeItem("usuario");

    //clear elimina todas las variabbles del localStorage
    localStorage.clear();
    this.router.navigate(["/login"]);
  }//cierre de logout

  eslogueado():boolean{
    if(localStorage.getItem("usuario")!=null){
      return true;
    }else{
return false;
    }
  }
}
