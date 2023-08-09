import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.css']
})
export class ManuComponent implements OnInit {

  constructor(public Serviciologin: LoginService) {}
  
  ngOnInit(): void {
    let menuToggle = document.querySelector('.menuToggle') as HTMLElement;
    menuToggle.onclick = function() {
      menuToggle.classList.toggle('active');
    };
  }

  cerrarsesion() {
    this.Serviciologin.logout();
  }
}
