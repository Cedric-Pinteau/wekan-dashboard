import { Injectable, Injector } from '@angular/core';
import { BOARDS } from '../../mock-list-boards';
import { Board, UserLogin, FullBoard } from '../../models/NameSpace';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });


  private headersGet = new HttpHeaders()
    .set('Accept', 'application/json');

  constructor(private http: HttpClient, private injector: Injector) { }


  getBoards(): Observable<Board[]> {

    let loginService = this.injector.get(LoginService);

    let apiUrl = `https://wekan.lab-poc-projects.team/api/users/${loginService.getUserID()}/boards`;

    var boards: Board[];

    return this.http.get<Board[]>(apiUrl, { headers: this.headersGet });

  }

  showBoardInfo(board: Board): Observable<FullBoard> {
    const urlExport = "https://wekan.lab-poc-projects.team/api/boards/" + board._id + "/export";

    return this.http.get<FullBoard>(urlExport, { headers: this.headersGet });

  }

}
