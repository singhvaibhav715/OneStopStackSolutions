import { Component, OnInit } from '@angular/core';
import { card_data } from '../cards-data';
@Component({
  selector: 'app-card-groups',
  templateUrl: './card-groups.component.html',
  styleUrls: ['./card-groups.component.css']
})
export class CardGroupsComponent implements OnInit {

  constructor() { }

  items:any[]=[]
  ngOnInit(): void {
    this.items=card_data
  }

}
