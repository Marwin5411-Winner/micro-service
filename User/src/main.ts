import { NestFactory } from '@nestjs/core';
import { UserModule } from './User.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3001);
}
bootstrap();
