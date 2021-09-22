import { Injectable, Injector } from '@angular/core';
import { BOARDS } from '../../mock-list-boards';
import { Board, UserLogin, FullBoard } from '../../models/NameSpace';
import { from, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginService } from '../login.service';
import { environment } from 'src/environments/environment';
import { HelperService } from '../helper.service';
import { Snapshots } from 'src/app/models/snapshot.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private headersGet = new HttpHeaders()
    .set('Accept', 'application/json');

  private headersPost = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient, private helperService: HelperService, private loginService: LoginService,private injector: Injector) { }

  // get all boards from current user
  getBoards(headers?: HttpHeaders): Observable<Board[]> {
    if (typeof headers === 'undefined') { headers = this.headersGet }
    let loginService = this.injector.get(LoginService);
    let apiUrl = `${environment.apiEndpoint}/users/${loginService.getUserID()}/boards`;
    
    return this.http.get<Board[]>(apiUrl, { headers: this.headersGet });
  }

  // get all content (lists and cards) from a specific board
  showBoardInfo(board: Board): Observable<FullBoard> {
    const urlExport = `${environment.apiEndpoint}/boards/${board._id}/export`;

    return this.http.get<FullBoard>(urlExport, { headers: this.headersGet });
  }

  // POST a snapshot to dbAPI with userID as current user and owner of the board.
  snapBoard(fullboard: FullBoard) {
    const urlExport = `${environment.dbApi}/snap`;
    // the userID stored in cookies is the one returned to database. 
    let userID = this.loginService.getUserID();
    let boardName = fullboard.title;
    
    return this.http.post(urlExport,  {userID: userID, boardName: boardName ,fullboard: fullboard},{ headers: this.headersPost });
  }

  // GET all snapshots for a specified board (belonging to current user)
  getUserSnap(boardName: String | undefined){
    let userID = this.loginService.getUserID();
    const url = `${environment.dbApi}/snap?userID=${userID}&board=${boardName}`;

    return this.http.get<Array<Snapshots>>(url, {headers: this.headersGet});
  }
}
