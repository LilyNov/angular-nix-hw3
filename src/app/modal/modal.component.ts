import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/Card'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  cards: Card[] = []

  constructor() { }

  openModal = -1
  ngOnInit() {

  }

  OpenModal() {
    console.log('modal');

  }
  // close() {
  //   this.openModal = -1
  // }
}
