import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  public readonly orders: any[] = [];

  getHello(): string {
    return 'Hello from Service A';
  }

  getOrder(id: number) {
    return this.orders[id];
  }

  getOrders() {
    return this.orders;
  }

  handleOrderCreated(data: any) {
    this.orders.push(data);
    console.log(data)
    return data;
  }

  updateOrder(data: any) {
    this.orders.splice(data.id, 1);
    this.orders.push(data);
    console.log(data)
    return data;
  }

  deleteOrder(id: number) {
    this.orders.splice(id, 1);
    return this.orders;
  }

}