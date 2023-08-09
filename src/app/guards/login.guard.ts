import { CanActivate,Router  } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { Injectable } from '@angular/core';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class loginGuard implements CanActivate{
  constructor(private ServicioLogin:LoginService, private router:Router){}

  canActivate():boolean{
    if(this.ServicioLogin.eslogueado()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }//cierre canActivate
}
