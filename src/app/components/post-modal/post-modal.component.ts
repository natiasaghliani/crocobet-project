import { Component, EventEmitter, Input, OnDestroy, Output, Renderer2 } from '@angular/core';
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-post-modal',
  standalone: true,
  imports: [],
  templateUrl: './post-modal.component.html',
  styleUrl: './post-modal.component.scss'
})
export class PostModalComponent implements OnDestroy {
  @Input() postData!: Post;

  @Output() close = new EventEmitter();

  constructor(
    private renderer2: Renderer2
  ){
    this.renderer2.setStyle(document.body, 'overflow', 'hidden')
  }

  public closePopup(): void {
    this.close.emit()
  }

  ngOnDestroy(): void {
    this.renderer2.removeStyle(document.body, 'overflow')
  }
}
