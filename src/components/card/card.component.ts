import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() editEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  @Input() post: Post;

  constructor() { }

  edit(id) {
    this.editEvent.emit(id)
  }

  remove(id) {
    this.removeEvent.emit(id)
  }

}
