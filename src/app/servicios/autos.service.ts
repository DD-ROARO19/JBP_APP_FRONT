import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  url = 'http://localhost:3000/autos';

  constructor( private http: HttpClient ){}

  getAll(sucursal:any){
    return this.http.get<any>(this.url+"?sucursal="+sucursal).pipe(map( i => i.autos ));
  }

}
