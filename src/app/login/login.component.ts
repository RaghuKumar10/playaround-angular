import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../models/user/user-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials : UserCredentials = new UserCredentials();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert("form is submitted");
  }

}
