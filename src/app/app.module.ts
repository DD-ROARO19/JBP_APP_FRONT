import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroCarrosComponent } from './registro-carros/registro-carros.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { ManuComponent } from './manu/manu.component';

import { IonicModule } from '@ionic/angular';
import { CarrosComponent } from './carros/carros.component';

//Servicios
import { LoginService } from './servicios/login.service';
import { AutosService } from './servicios/autos.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroCarrosComponent,
    InicioComponent,
    ManuComponent,
    CarrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [
    LoginService,
    AutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
