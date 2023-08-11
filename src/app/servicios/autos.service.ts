import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  url = 'http://localhost:3000/autos';

  constructor( private http: HttpClient ){}

  getAll(){
    return this.http.get<any>(this.url).pipe(map( i => i.autos ));
  }
  getAllEn(){
    return this.http.get<any>(this.url+'/en').pipe(map( i => i.autos ));
  }

  getAuto(auto:Object){
    return this.http.post<any>(this.url+'/encontrar', auto).pipe(map( i => i.auto ));
  }

  guardarAuto(auto:Object){
    return this.http.post<any>(this.url,auto);
  }

  modificarAuto(auto:Object){
    return this.http.put<any>(this.url, auto);
  }

  desactivarAuto(placa:String){
    return this.http.post<any>(this.url, placa);
  }

  cobrarAuto(auto:Object){
    return this.http.put<any>(this.url+'/cobrar', auto);
  }

}
