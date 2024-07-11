import { Component, OnDestroy } from '@angular/core';
import { TodosFacadeService } from '../../facades/todos-facade.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnDestroy {
  public userTodos$: BehaviorSubject<Todo[]> = this.todosFacadeService.usersTodos$;

  constructor(
    private route: ActivatedRoute,
    private todosFacadeService: TodosFacadeService
  ) {
    const getUserIdFromUrl = this.route.snapshot.paramMap.get('userId');
    if (getUserIdFromUrl) {
      this.todosFacadeService.getUserTodos(getUserIdFromUrl);
    }
  }

  ngOnDestroy(): void {
    this.todosFacadeService.usersTodos$.next([]);
  }

}
