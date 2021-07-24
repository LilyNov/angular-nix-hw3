import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Card } from '../models/Card'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  cards: Card[] = [
    {
      img: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
      content: 'card 1',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
      content: 'card 2',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg',
      content: 'card 3',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg',
      content: 'card 4',
    }
  ]

  ngOnInit(): void {

  }

  deleteCard(id: number): void {
    this.cards = this.cards?.filter((value, index) => index !== id)
  }

  @Output()
  openModalEvent = new EventEmitter()


  openModal(card: object) {
    console.log(card);
    this.openModalEvent.emit(card)
  }

}
