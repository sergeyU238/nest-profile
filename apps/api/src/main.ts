/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  if (app.get(ConfigService).getOrThrow('NODE_ENV') === 'production') {
    app.enableCors({
      origin: 'https://nest-profile.relaxdev.ru',
      credentials: true,
    });
  }
  const port = app.get(ConfigService).getOrThrow('PORT');
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
