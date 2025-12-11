import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DatabaseModule } from './database/database.module';
import { JwtAuthModule } from './jwt/jwt-auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule , DatabaseModule , JwtAuthModule ,
    ConfigModule.forRoot({
      isGlobal:true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('*')
  }

}
