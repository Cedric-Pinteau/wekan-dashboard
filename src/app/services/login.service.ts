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
    /*Il faut convertir le userInfo en httpParams -> un problème de l'API wekan certainement, les versions récentes d'angular >6 font le mapping automatiquement mais ça ne amrche pas ici*/
    return this.http.post<UserLogin>(this.loginUrlApi, this.helperService.objectToHttpParams(userInfo) , {headers : this.headers});
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  getToken(): string|null{
    return localStorage.getItem('token');
  }

  // return all informations from current user
  getUserInfos(): Observable<UserInfo>{
    return this.http.get<UserInfo>(this.getUserInfo, {headers : this.getHeaders});
  }

  getUserName(): string|null{
    return localStorage.getItem('userName');
  } 

  getUserID(): string|null{
    return localStorage.getItem('userID');
  } 

  cleanStorage(): void{
    localStorage.clear();
  }

}
