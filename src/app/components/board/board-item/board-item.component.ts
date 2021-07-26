import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Board} from '../../../models/NameSpace';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
@Input() board: Board;
@Output() onBoardClickInfo: EventEmitter<Board> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onBoardClick(board: Board){
    this.onBoardClickInfo.emit(board);
  }
}
