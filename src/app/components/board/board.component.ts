import { Component, OnInit } from '@angular/core';
import { Board, FullBoard, UserLoginInfo } from '../../models/NameSpace';
import { BoardService } from 'src/app/services/board/board.service';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  boards: Board[] = [];
  boardExport: FullBoard;
  isBoardShowed: boolean = false;
  snapBoard: FullBoard;
  
  constructor(private boardService: BoardService, public loginService: LoginService) { }

  ngOnInit(): void {
    // get boards from user when component is called
    // filter used to not display creation board (first board on wekan when connected)
    this.boardService.getBoards().subscribe((result) => this.boards = result.filter((t) => t.title.toLowerCase() !== "templates"));
  }

  // when snap_fullboard output (from board-export component) change, assign its value to boardExport
  // thus displaying snap instead of currrent state
  onChangeHandler(snap: FullBoard){
    this.boardExport = snap;
    this.isBoardShowed = true;
  }

  // when board is clicked show or hide informations (depending of boolean)
  onBoardClickInfo(board: Board){
    if (!this.isBoardShowed){
      this.showBoardInfo(board);
    } else {
      this.isBoardShowed = false; // don't show board
      this.ngOnInit(); // refresh component
    }
  }
  
  // return informations (type Fullboard) from a selected board (type Board)
  showBoardInfo(board: Board){
    this.boardService.showBoardInfo(board).subscribe(
      res => {
        this.boardExport = res;
        this.isBoardShowed = true; // show board
      },
      err => console.log(err)
    );
    this.boards = this.boards.filter((t) => t._id === board._id);
  }
}