import { Injectable, Inject } from '@nestjs/common';
import { userCreateRequest } from './create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { createUserEvent } from './create-user.event';
import { parse } from 'path';
import { updateUserEvent } from './update-user.event';
import { In } from 'typeorm';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('USER_SERVICE') private readonly clientA: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly clientB: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly clientC: ClientProxy,

  ) {}
  
  getUser(id) {
    console.log("Getting user")
    console.log(id)
    id = parseInt(id.toString())
    return this.clientA.send('user_get', { id });
  }

  createUser(userCreate: userCreateRequest) {
    console.log(userCreate)
    return this.clientA.emit('user_created', new createUserEvent(userCreate.email, userCreate.password));
    
  }

  updateUser(userCreate: userCreateRequest, id: number) {
    console.log(userCreate)
    return this.clientA.emit('user_created', new updateUserEvent(id, userCreate.name, userCreate.email, userCreate.password, userCreate.role));
    
  }

  deleteUser(id: number) {
    return this.clientA.send('user_delete', { id });
  }

  getProducts() {
    return this.clientA.send('products_get', {});
  }

  getProduct(id) {
    id = parseInt(id.toString())
    return this.clientB.send('product_get', { id });
  }

  createProduct(productCreate: any) {
    return this.clientB.emit('product_created', productCreate);
  }

  updateProduct(productCreate: any, id: number) {
    return this.clientB.emit('product_created', productCreate);
  }

  deleteProduct(id: number) {
    return this.clientB.send('product_delete', { id });
  }

  getOrders() {
    return this.clientC.send('orders_get', {});
  }

  getOrder(id) {
    id = parseInt(id.toString())
    return this.clientC.send('order_get', { id });
  }

  createOrder(orderCreate: any) {
    return this.clientC.emit('order_created', orderCreate);
  }

  updateOrder(orderCreate: any, id: number) {
    return this.clientC.emit('order_created', orderCreate);
  }

  deleteOrder(id: number) {
    return this.clientC.send('order_delete', { id });
  }

  


}