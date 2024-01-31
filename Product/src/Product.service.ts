import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private readonly products: any[] = [];

  getHello(): string {
    return 'Hello from Service A';
  }

  getProduct(id: number) {
    return this.products[id];
  }

  getProducts() {
    return this.products;
  }

  handleProductCreated(data: any) {
    this.products.push(data);
    console.log(data)
    return data;
  }

  updateProduct(data: any) {
    this.products.splice(data.id, 1);
    this.products.push(data);
    console.log(data)
    return data;
  }

  deleteProduct(id: number) {
    this.products.splice(id, 1);
    return this.products;
  }

}