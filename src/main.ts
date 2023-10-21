import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './common/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      *
    ],
  });
  app.setGlobalPrefix('api/v1');
  swaggerConfig(app);
  await app.listen(8080);
}
bootstrap();
