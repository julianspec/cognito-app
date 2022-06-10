import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Output('login') funcLogin = new EventEmitter<number>();

  constructor(private router: Router) {
    localStorage.clear();
  }

  ngOnInit(): void {}

  error=false;
  user:any;
  pass:any;

  login()
  {
    //si el usuario esta logeado envio un 1
    //this.funcLogin.emit(1);  
    if(this.user=="julian" && this.pass =="1"){
      this.error = false;

      //this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {

      this.router.navigate(['/main']);
      environment.username = this.user;

     //});

    }else{
      this.error = true;
    }
    
  }

}