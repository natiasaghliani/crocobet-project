import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit  {
  @Output() menuState = new EventEmitter();

  public currentDateTime: string = '';

  constructor() {}

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }

}
