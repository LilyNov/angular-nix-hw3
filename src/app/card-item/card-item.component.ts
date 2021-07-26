import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/Card'


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  showModal = -1
  @Input() cardItem!: Card
  @Output() onDeleteItem: EventEmitter<Card> = new EventEmitter<Card>()

  constructor() { }

  ngOnInit(): void {

  }

  public deleteItem(): void {
    this.onDeleteItem.emit(this.cardItem)
  }

  openModal(index: number): void {
    this.showModal = index
  }

  closeModal(): void {
    this.showModal = -1
  }

}
