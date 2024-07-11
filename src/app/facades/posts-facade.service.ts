import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../service/http.service';
import { Post } from '../models/posts.model';

@Injectable({
  providedIn: 'root',
})
export class PostsFacadeService {
  public postsList$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  public userPostsList$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(
    []
  );

  constructor(private httpService: HttpService) {}

  public getAllPosts(): void {
    this.httpService.getAllPosts().subscribe((response) => {
      this.postsList$.next(response);
    });
  }

  public getUserPosts(userId: string | number): void {
    this.httpService.getPostsByUserId(userId).subscribe((response) => {
      this.userPostsList$.next(response);
    });
  }
}
