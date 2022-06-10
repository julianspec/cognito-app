import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  
  login = 0;

  constructor() { }
 
  ngOnInit(): void {
    
  }

  getLogin(e:any){ 
   
    this.login = e;
    console.log(e);

    
  }
  
}
