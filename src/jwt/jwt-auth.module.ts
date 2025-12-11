import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Global() // <--- Enable this
@Module({
  imports: [
    JwtModule.register({
      global: true, // This is for the JwtService itself
      secret: 'MY_SECRET_KEY_123',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [JwtModule],
})
export class JwtAuthModule {}