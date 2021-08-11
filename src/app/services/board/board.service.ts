import { Injectable, Injector } from '@angular/core';
import { BOARDS } from '../../mock-list-boards';
import { Board, UserLogin, FullBoard } from '../../models/NameSpace';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private headersGet = new HttpHeaders()
    .set('Accept', 'application/json');

  constructor(private http: HttpClient, private injector: Injector) { }

  // get user boards list
  getBoards(headers?: HttpHeaders): Observable<Board[]> {

    if (typeof headers === 'undefined') { headers = this.headersGet }

    let loginService = this.injector.get(LoginService);

    let apiUrl = `${environment.apiEndpoint}/users/${loginService.getUserID()}/boards`;
    
    return this.http.get<Board[]>(apiUrl, { headers: this.headersGet });

  }

  // get all content (lists and cards) from a specific list
  showBoardInfo(board: Board): Observable<FullBoard> {
    const urlExport = `${environment.apiEndpoint}/boards/${board._id}/export`;

    return this.http.get<FullBoard>(urlExport, { headers: this.headersGet });
  }

}
