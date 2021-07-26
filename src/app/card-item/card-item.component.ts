import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/Card'


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  showModal = -1

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cardItem);

  }

  @Input() cardItem!: Card
  @Output() onDeleteItem: EventEmitter<Card> = new EventEmitter<Card>()

  public deleteItem(): void {
    this.onDeleteItem.emit(this.cardItem)
  }


  openModal(index: number) {
    console.log('modal');
    this.showModal = index
  }
  closeModal() {
    this.showModal = -1
  }

}
