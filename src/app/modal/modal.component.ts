import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../models/Card'



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  card!: Card
  deleteCard!: EventEmitter<Card>

constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }
  onDeleteCard(): void {
    this.deleteCard.emit(this.card);
    this.activeModal.close();
  }

}
