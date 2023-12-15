import { Controller, Get } from '@nestjs/common';
import { ProductService } from './Product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }
}