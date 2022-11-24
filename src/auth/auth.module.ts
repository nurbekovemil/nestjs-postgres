import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),

    JwtModule.register({
      secret: process.env.PRIVATE_JWT_KEY || 'secret',
      signOptions: {
        expiresIn: '2h',
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
