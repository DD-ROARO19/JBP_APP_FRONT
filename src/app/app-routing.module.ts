import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroCarrosComponent } from './registro-carros/registro-carros.component';
import { InicioComponent } from './inicio/inicio.component';
import { ManuComponent } from './manu/manu.component';
import { CarrosComponent } from './carros/carros.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroCarrosComponent,canActivate:[loginGuard]},
  {path: "inicio", component: InicioComponent},
  {path: "manu", component:ManuComponent},
  {path: "carros", component:CarrosComponent,canActivate:[loginGuard]},
  {path:"**", redirectTo:"/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
