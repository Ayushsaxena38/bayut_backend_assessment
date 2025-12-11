import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { simpleMiddleware } from './common/middleware/loggerSimple.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'*',
    methods:'*',
    credentials:true
  })

  //middleware for the validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted:true
  }));
  app.use(simpleMiddleware)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
