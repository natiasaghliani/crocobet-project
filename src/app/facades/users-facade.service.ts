import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../service/http.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersFacadeService {
  public usersList$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private httpService: HttpService) {}

  public getAllUsers(): void {
    this.httpService.getAllUsers().subscribe((response) => {
      this.usersList$.next(response);
    });
  }
}
