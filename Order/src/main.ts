import { NestFactory } from '@nestjs/core';
import { OrderModule } from './Order.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  await app.listen(3003);
}
bootstrap();