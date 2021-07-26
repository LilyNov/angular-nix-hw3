import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/Card'



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() cardItem!: Card

  constructor() { }

  ngOnInit() {

  }

  showModal = -1

  openModal(index: number) {
    this.showModal = index
  }
  closeModal() {
    this.showModal = -1
  }
}
