import { Component, Input, OnInit, Output } from '@angular/core';
import { Card, FullBoard, List, Attachment, User, Label } from 'src/app/models/NameSpace';
import { trigger, style, animate, transition } from '@angular/animations';
import { LoginService } from 'src/app/services/login.service';
import { MatFormField } from '@angular/material/form-field';
import { AdaptColorService } from 'src/app/services/css/adapt-color.service';
import { Dictionary } from 'src/app/models/dictionary.model';

@Component({
  selector: 'app-board-info',
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
  templateUrl: './board-info.component.html',
  styleUrls: ['./board-info.component.css']
})
export class BoardInfoComponent implements OnInit {

  @Input() fullBoard: FullBoard;
  @Input() label: Label;

  // user List config
  listOptions: Dictionary =  {    
    'Mood Board': {
      title: false,
      labels: true,
      color: false,
      attachments: true,
      createdDate: false,
      modifiedDate: false,
      dueDate: false,
      endDate: false
    },
    'Météo Backlog Heat' : {
      title: true,
      labels: true,
      color: true,
      attachments: false,
      createdDate: false,
      modifiedDate: true,
      dueDate: false,
      endDate: false
    },
    'Charge équipe' : {
      title: true,
      labels: false,
      color: true,
      attachments: false,
      createdDate: false,
      modifiedDate: false,
      dueDate: false,
      endDate: false
    }
  }

  // check if a list is in user List config (Boolean)
  filterList = (list: List) => {
    return Object.keys(this.listOptions).find(key => key === list.title) ? true : false;
  }

  constructor(public adaptColorService: AdaptColorService) { }

  ngOnInit(): any { }

  // return list of users associated with a board
  getUserList(){
    return this.fullBoard.users;
  }

  // only return not archived Lists
  getNotArchivedList(){
    return this.fullBoard.lists?.filter(item => !item.archived);
  }

  //  return all cards from specific list which aren't labled as a rule.
  getCardsOfList(list:List){
    const allRulesLabel = this.fullBoard.labels?.filter(item => item.name == 'Règle' || item.name == 'Règles');    
    return this.fullBoard.cards?.filter(item => item.listId === list._id && !item.archived && !item.labelIds.some(r => allRulesLabel?.find(o => o._id === r))); // doesnt include rules id
  }

  // return first attachment of a card
  getFirstAttachmentFileOfCard(Card:Card){
    return this.fullBoard.attachments?.filter(item => item.cardId === Card._id)[0].file;
  }

  // return all attachments of a card
  getAttachmentsOfCard(Card:Card){
    //console.log(this.fullBoard.attachments);
    return this.fullBoard.attachments?.filter(item => item.cardId === Card._id);
  }

  // return the label infos of a specific labelid attached to a card
  getLabelOfCard(labelId: String){
    const selectedLabel = this.fullBoard.labels?.filter(item => item._id === labelId);
    let labelId_ = "undefined";
    let labelColor: string | undefined = "undefined";
    let labelName = "undefined"

    if(selectedLabel){
      labelId_ = selectedLabel[0]._id;
      typeof selectedLabel[0].color === undefined ? labelColor = "undefined" : labelColor = selectedLabel[0].color
      typeof selectedLabel[0].name === undefined ? labelName = "undefined" : labelName = selectedLabel[0].name;
    }
    return [labelId_, labelColor, labelName];
  }

  // converts date format to a more customer one
  toFriendlyDate(date: any){
    let  date_: Date;
    let friendlyDate;
    try{
      date_ = new Date(date);
      if (date_.toString() !== "Invalid Date"){
        friendlyDate = date_.toLocaleDateString("fr-FR")
      }
    } catch (e){
      friendlyDate = ""
    }
    return friendlyDate;
  }
}
