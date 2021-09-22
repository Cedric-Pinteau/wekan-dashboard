import { Component, Input, OnInit, Output } from '@angular/core';
import { Board, FullBoard } from 'src/app/models/NameSpace';
import { Snapshots } from 'src/app/models/snapshot.model';
import { BoardService } from 'src/app/services/board/board.service';
import { LoginService } from 'src/app/services/login.service';
import { EventEmitter } from '@angular/core';
import { BoardComponent } from '../board.component';


@Component({
  selector: 'app-board-export',
  templateUrl: './board-export.component.html',
  styleUrls: ['./board-export.component.css']
})
export class BoardExportComponent implements OnInit {

  @Input() fullboard: FullBoard;
  @Output() snap_fullboard: EventEmitter<FullBoard> = new EventEmitter();

  selected = '';
  snapshots: Snapshots[] = [];

  constructor(private boardComponent: BoardComponent, public loginService: LoginService, private boardService: BoardService) { }

  ngOnInit(): void {
    // get saved snapshots of current board
    this.boardService.getUserSnap(this.fullboard.title).subscribe(
      res => this.snapshots = res,
      err => console.log(err));
  }

  refresh(){
    this.ngOnInit();
  }
  
  // get board from selected snapshot then pass it to snap_fullboard
  // else send again a request to wekan to display board current state
  onSnapSelected(snap: any){
    if(snap !== "default"){
      this.snap_fullboard.emit(snap['boardExport'] as FullBoard);
    } else {
      this.boardComponent.showBoardInfo(this.fullboard as Board);
    }
    return this.snap_fullboard;
  }
  
  // Make a snapshot for a specified fullboard
  snapIt(fullboard: FullBoard){
    this.boardService.snapBoard(fullboard).subscribe(res => console.log(res),
    err => console.log(err));
  }

}
