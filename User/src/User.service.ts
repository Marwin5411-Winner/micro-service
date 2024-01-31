import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class UserService {
  private readonly users: any[] = [{
    email: "example@email.com",
    password: "password"
  }];


  getUser(id: number) {
    return this.users[id];
  }

  handleUserCreated(data: CreateUserEvent) {
    this.users.push(data);
    console.log(data)
    return data;
  }

  updateUser(data: CreateUserEvent) {
    this.users.push(data);
    console.log(data)
    return data;
  }

  deleteUser(id: number) {
    this.users.splice(id, 1);
    return this.users;
  }
}