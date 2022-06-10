import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  user:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = "admin";
  }

  cerrarSesion()
  {
    this.router.navigateByUrl('/login'); 
  }


}
