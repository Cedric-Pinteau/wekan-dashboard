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
    // récupère tous les snapshots sauvegardés pour l'utilisateur courant
    this.boardService.getUserSnap(this.fullboard.title).subscribe(
      res => this.snapshots = res,
      err => console.log(err));
  }

  refresh(){
    this.ngOnInit();
  }
  
  // récupère uniquement le tableau de l'instantanné sélectionné et le passe dans snap_fullboard
  // sinon relance une requete vers wekan pour l'état actuel
  onSnapSelected(snap: any){
    if(snap !== "default"){
      this.snap_fullboard.emit(snap['boardExport'] as FullBoard);
    } else {
      this.boardComponent.showBoardInfo(this.fullboard as Board);
    }
    return this.snap_fullboard;
  }
  
  // récupère un instantanné du tableau courant
  snapIt(fullboard: FullBoard){
    this.boardService.snapBoard(fullboard).subscribe(res => console.log(res),
    err => console.log(err));
  }

}
