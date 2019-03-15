import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../models/user/user-credentials';
import { AuthenticationService } from '../services/user/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials : UserCredentials = new UserCredentials();

  logInStatus : {status : boolean, message : string};

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form submitted");
    this.authService.authenticate(this.credentials)
    .subscribe(
      res => console.log(res),
      err => this.logInStatus = err
    );
  }

}
