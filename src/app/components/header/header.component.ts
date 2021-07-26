import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Wekan Dashboard';
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  resetSession(): void {
    this.loginService.cleanStorage();
    location.reload();
  }

}
