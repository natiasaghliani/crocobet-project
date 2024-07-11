import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { UserPostComponent } from './pages/user-post/user-post.component';
import { UserTableComponent } from './pages/user-table/user-table.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UserTableComponent},
    {path: 'posts', component: PostListComponent},
    {path: 'user-post/:userId', component: UserPostComponent},
    {path: 'todos/:userId', component: TodoListComponent},
    {path: '**', redirectTo: '/'},
];
