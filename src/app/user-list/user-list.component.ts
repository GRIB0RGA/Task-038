import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userPartial } from '../models/user.models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  customers: userPartial[] | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.customers = this.userService.getUsers();
  }

  showUserDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
