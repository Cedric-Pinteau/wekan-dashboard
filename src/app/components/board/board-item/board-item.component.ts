import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Board} from '../../../models/NameSpace';

@Component({
  selector: 'app-board-item',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ],
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
@Input() board: Board;
@Input() isBoardShowed: Boolean;
@Output() onBoardClickInfo: EventEmitter<Board> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // when board is clicked emit its informations to parent.
  onBoardClick(board: Board){
    this.onBoardClickInfo.emit(board);
  }
}
