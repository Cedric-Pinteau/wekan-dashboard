import { Component, OnInit } from '@angular/core';
import {Board, FullBoard, UserLoginInfo} from '../../models/NameSpace';
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
  
  constructor(private boardService: BoardService,public loginService: LoginService) { }

  ngOnInit(): void {
    this.boardService.getBoards().subscribe((result) => this.boards = result); // get boards from user when component is called
  }

  
  showBoardInfo(board: Board){
    if (!this.isBoardShowed){
      this.boardService.showBoardInfo(board).subscribe(
        res => {
          this.boardExport = res;
          this.isBoardShowed = true; // show board
        },
        err => console.log(err));
      this.boards = this.boards.filter((t) => t._id === board._id); 
    } else {
      this.isBoardShowed = false; // don't show board
      this.ngOnInit(); // refresh component
    }
  }
}