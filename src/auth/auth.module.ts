import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user-entities/userEntity';
// import { UsersController } from 'src/users/controllers/users/users.controller';
import { AuthService } from 'src/auth/services/auth/auth.service';
// import { UsersService } from 'src/users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import passport from 'passport';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStratagy } from './jwt.strategy';

@Module({
    imports:[
      
      TypeOrmModule.forFeature([User]),
      
      PassportModule,JwtModule.register({
      secret:"mysecret",
      signOptions:{expiresIn:"60s"}
    })
  ],
    controllers: [ AuthController],
    providers: [ AuthService,LocalStrategy,JwtStratagy],
    exports:[AuthService]   
  })

export class AuthModule {}
