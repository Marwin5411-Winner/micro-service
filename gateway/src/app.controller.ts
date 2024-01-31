// app.controller.ts (Gateway)
import { Controller, Get, Inject, Body, Post, Param, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { userCreateRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user/:id')
  getUser(@Param() params : any){
    return this.appService.getUser(params.id);
  }

  @Post('user')
  createUser(@Body() userCreate: userCreateRequest) {
    return this.appService.createUser(userCreate);
  }

  @Put('user/:id')
  updateUser(@Body() userCreate: userCreateRequest, @Param() id : number){
    return this.appService.updateUser(userCreate, id);
  }

  @Delete('user/:id')
  deleteUser(@Param() id : number){
    return this.appService.deleteUser(id);
  }

  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }

  @Get('products/:id')
  getProduct(@Param() params : any){
    return this.appService.getProduct(params.id);
  }

  @Post('products')
  createProduct(@Body() productCreate: any) {
    return this.appService.createProduct(productCreate);
  }

  @Put('products/:id')
  updateProduct(@Body() productCreate: any, @Param() id : number){
    return this.appService.updateProduct(productCreate, id);
  }

  @Delete('products/:id')
  deleteProduct(@Param() id : number){
    return this.appService.deleteProduct(id);
  }

  @Get('orders')
  getOrders() {
    return this.appService.getOrders();
  }

  @Get('orders/:id')
  getOrder(@Param() params : any){
    return this.appService.getOrder(params.id);
  }

  @Post('orders')
  createOrder(@Body() orderCreate: any) {
    return this.appService.createOrder(orderCreate);
  }

  @Put('orders/:id')
  updateOrder(@Body() orderCreate: any, @Param() id : number){
    return this.appService.updateOrder(orderCreate, id);
  }

  @Delete('orders/:id')
  deleteOrder(@Param() id : number){
    return this.appService.deleteOrder(id);
  }
  
}