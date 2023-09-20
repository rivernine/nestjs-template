import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './common/configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://webflow.co.kr',
      'https://www.webflow.co.kr',
      'http://webflow.co.kr',
      'http://www.webflow.co.kr',
      'http://124.48.192.106:5173'
    ],
  });
  app.setGlobalPrefix('api/v1');
  swaggerConfig(app);
  await app.listen(8081);
}
bootstrap();
