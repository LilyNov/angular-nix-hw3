import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../models/Card'
import { ModalComponent } from '../modal/modal.component'


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() cardItem!: Card
  @Output() deleteCard: EventEmitter<Card> = new EventEmitter<Card>()

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openModal() {
    const active = this.modalService.open(ModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
    });
    active.componentInstance.card = this.cardItem;
    active.componentInstance.deleteCard = this.deleteCard;
  }
}
