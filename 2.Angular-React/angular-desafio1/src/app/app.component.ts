import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CommonModule } from '@angular/common';

interface User {
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.exec().subscribe((data) => (this.users = data));
  }
}
