import { Component, OnInit } from '@angular/core';
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
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
      content: 'card 1',
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
      content: 'card 2',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg',
      content: 'card 3',
    },
    {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg',
      content: 'card 4',
    }, {
      id: 5,
      img: 'https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg',
      content: 'card 5',
    },
    {
      id: 6,
      img: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
      content: 'card 6',
    },
    {
      id: 7,
      img: 'https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg',
      content: 'card 7',
    },
    {
      id: 8,
      img: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg',
      content: 'card 8',
    }
  ]

  ngOnInit(): void {

  }

  deleteItem(card: Card): void {
    const cardId = card.id;
    console.log(card);
    const newCards: Card[] = this.cards.filter((cardItem: Card) => cardItem.id !== cardId)
    this.cards = [...newCards]
  }

}
