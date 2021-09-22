import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { UserLogin, UserLoginInfo } from '../models/NameSpace';
import { UserInfo } from '../models/UserNameSpace';
import { HelperService } from './helper.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrlApi='https://wekan.lab-poc-projects.team/users/login';
  private getUserInfo='https://wekan.lab-poc-projects.team/api/user';

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  private getHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private helperService: HelperService) { }

  // Login with REST API (helper service as body)
  login(userInfo: UserLoginInfo): Observable<UserLogin>{
    // We need to convert the userInfo to httpParams -> probably a problem with wekan API, recent versions of angular > 6 do the mapping automatically but it doesn't seem to work here
    return this.http.post<UserLogin>(this.loginUrlApi, this.helperService.objectToHttpParams(userInfo) , {headers : this.headers});
  }

  // check if token exist in cookies
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  // return token from cookies
  getToken(): string|null{
    return localStorage.getItem('token');
  }

  // return all informations from current user
  getUserInfos(): Observable<UserInfo>{
    return this.http.get<UserInfo>(this.getUserInfo, {headers : this.getHeaders});
  }

  // return username from cookies
  getUserName(): string|null{
    return localStorage.getItem('userName');
  } 

  // return user_id from cookies
  getUserID(): string|null{
    return localStorage.getItem('userID');
  } 

  // clean cookies
  cleanStorage(): void{
    localStorage.clear();
  }

}
