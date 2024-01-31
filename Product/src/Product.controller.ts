import { Controller, Get } from '@nestjs/common';
import { ProductService} from './Product.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('product_get')
  getProduct(id: number) {
    return this.productService.getProduct(id);
  }

  @MessagePattern('products_get')
  getProducts() {
    return this.productService.getProducts();
  }

  @EventPattern('product_created')
  handleProductCreated(data: any) {
    console.log("Product created event received")
    return this.productService.handleProductCreated(data);
  }

  @MessagePattern('product_update')
  updateProduct(data: any) {
    return this.productService.handleProductCreated(data);
  }

  @MessagePattern('product_delete')
  deleteProduct(id: number) {
    return this.productService.deleteProduct(id);
  }

}