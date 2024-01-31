import { Controller, Get } from '@nestjs/common';
import { OrderService } from './Order.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern('order_get')
  getOrder(id: number) {
    return this.orderService.getOrder(id);
  }

  @MessagePattern('orders_get')
  getOrders() {
    return this.orderService.getOrders();
  }

  @MessagePattern('order_created')
  handleOrderCreated(data: any) {
    console.log("Order created event received")
    return this.orderService.handleOrderCreated(data);
  }

  @MessagePattern('order_update')
  updateOrder(data: any) {
    return this.orderService.handleOrderCreated(data);
  }

  @MessagePattern('order_delete')
  deleteOrder(id: number) {
    return this.orderService.deleteOrder(id);
  }
}