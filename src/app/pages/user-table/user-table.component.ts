import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersFacadeService } from '../../facades/users-facade.service';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent implements OnDestroy {
  private usersData$: BehaviorSubject<User[]> = this.usersFacadeService.usersList$;

  public filteredUsers: User[] = [];

  private userSubscription: Subscription;

  constructor(
    private usersFacadeService: UsersFacadeService,
    private router: Router
  ) {
    this.usersFacadeService.getAllUsers();

    this.userSubscription = this.usersData$.subscribe((value: User[]) => {
      this.filteredUsers = value;
    })
  }

  public getPostsByUserId(userId: number): void {
    this.router.navigate(['/user-post', userId]);
  }

  public findUsersByString(event: any): void {
    const searchString = event?.target?.value?.toLowerCase() || '';
    this.filteredUsers = this.usersData$.value.filter((user: User) => 
      user.email.toLowerCase().includes(searchString) || 
      user.name.toLowerCase().includes(searchString)
    );

  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  
}


