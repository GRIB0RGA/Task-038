import { Injectable } from '@angular/core';

import { default as customerList } from '../customer-list.json';

import { default as customerDetails } from '../customer-details.json';
import { userFull } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor() {}

  getUsers() {
    return customerList;
  }

  getUserDetails(id: number) {
    return customerDetails.find((user: userFull) => user.id == id);
  }
}
