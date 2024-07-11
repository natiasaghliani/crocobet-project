import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsFacadeService } from '../../facades/posts-facade.service';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.scss',
})
export class UserPostComponent {
  public userPosts$: BehaviorSubject<Post[]> = this.postsFacadeService.userPostsList$;

  constructor(
    private route: ActivatedRoute,
    private postsFacadeService: PostsFacadeService,
  ) {
    const getUserIdFromUrl = this.route.snapshot.paramMap.get('userId');
    if (getUserIdFromUrl) {
      this.postsFacadeService.getUserPosts(getUserIdFromUrl);
    }
  }

  ngOnDestroy(): void {
    this.postsFacadeService.userPostsList$.next([]);
  }
}
