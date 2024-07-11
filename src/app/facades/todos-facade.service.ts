import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../service/http.service';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosFacadeService {
  public usersTodos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor(private httpService: HttpService) {}

  public getUserTodos(userId: string | number): void {
    this.httpService.getUserTodoByUserId(userId).subscribe((response) => {
      this.usersTodos$.next(response);
    });
  }
}
