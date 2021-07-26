import { Component, Input, OnInit } from '@angular/core';
import { FullBoard, List, User } from 'src/app/models/NameSpace';

@Component({
  selector: 'app-board-info',
  templateUrl: './board-info.component.html',
  styleUrls: ['./board-info.component.css']
})
export class BoardInfoComponent implements OnInit {

  @Input() fullBoard: FullBoard;
  constructor() { }

  ngOnInit(): void {
  }

  getUserList(){
    return this.fullBoard.users;
  }

  getNotArchivedLits(){
    return this.fullBoard.lists?.filter(item => !item.archived);
  }

  getCardsOfList(list:List){
    return this.fullBoard.cards?.filter(item => item.listId === list._id && !item.archived);
  }

}
