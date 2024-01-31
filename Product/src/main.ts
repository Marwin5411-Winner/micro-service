import { NestFactory } from '@nestjs/core';
import { ProductModule } from './Product.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProductModule, {
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });
  await app.listen();
}
bootstrap();
