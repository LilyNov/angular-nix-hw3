import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/Card'



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() card!: Card
  constructor() { }

  ngOnInit() {
    console.log(this.card);

  }

  showModal = -1

  closeModal() {
    console.log('click close');

    this.showModal = -1
  }

  openM(card: Card): void {
    const cardId = card.id;
    console.log(card);
  }

}
