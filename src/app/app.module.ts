import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CardComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
