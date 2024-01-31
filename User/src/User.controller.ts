import { Controller, Get, } from '@nestjs/common';
import { UserService } from './User.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user_get')
  getUser(id: number) {
    return this.userService.getUser(id);
  }

  @EventPattern('user_created') 
  handleUserCreated(data: CreateUserEvent) {
    console.log("User created event received")
    return this.userService.handleUserCreated(data);
  }

  @MessagePattern('user_update')
  updateUser(data: CreateUserEvent) {
    return this.userService.handleUserCreated(data);
  }

  @MessagePattern('user_delete')
  deleteUser(id: number) {
    return this.userService.deleteUser(id);
  }
  
  
}