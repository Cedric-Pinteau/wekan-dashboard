import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserLoginInfo } from '../../models/NameSpace';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Output() onLogin: EventEmitter<UserLoginInfo> = new EventEmitter();
  email: string;
  password: string;
  login_error: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.email){
      alert('Merci de renseigner votre email wekan');
      return;
    }
    if (!this.password){
      alert('Merci de renseigner votre mdp wekan');
      return;
    }

    const userInfo = {
      email: this.email,
      password: this.password
    }
    
    this.loginService.login(userInfo)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token); // store token in cookies
        this.loginService.getUserInfos().subscribe(
          res => {
            localStorage.setItem('userName',res.username); // store username in cookies
            localStorage.setItem('userID',res._id); // store userId in cookies
            location.reload();
          },
          err => console.log(err)
        )
        console.log(res);
      },
      err => {
        this.login_error = err.error.reason;
        console.log(err);
      }
    )
    this.email='';
    this.password='';
  }
}
