import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostsFacadeService } from '../../facades/posts-facade.service';
import { UsersFacadeService } from '../../facades/users-facade.service';
import { PostModalComponent } from '../../components/post-modal/post-modal.component';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, PostModalComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',

})
export class PostListComponent {
  public postsData$: BehaviorSubject<Post[]> = this.postsFacadeService.postsList$;

  public postDetails?: Post | null;

 constructor(
  private postsFacadeService: PostsFacadeService, private usersFacadeService: UsersFacadeService
 ) {
  if (!this.usersFacadeService.usersList$.value?.length) {
    this.usersFacadeService.getAllUsers();
  }

  this.postsFacadeService.getAllPosts()
 }

 public getUserNameByPostId(userId: number){
  return this.usersFacadeService.usersList$.value?.find((value: User) => value.id === userId)?.name;
 }

 public openPostDetails(post: Post): void {
  this.postDetails = post;
 }
 
}
