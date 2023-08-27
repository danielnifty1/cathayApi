import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminService } from './services/admin.service';
import { AdminController } from './controllers/admin.controller';
import { Admin } from 'src/typeorm/admin-entities/admin';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStratagy } from './jwt.strategy';
import { Cat } from 'src/typeorm/admin-entities/category';





@Module({
  imports:[

    TypeOrmModule.forFeature([Admin,Cat]),

    PassportModule,JwtModule.register({
      secret:"adminsecret",
      signOptions:{expiresIn:"60s"}
    })
  ],


  controllers: [AdminController],
  providers: [AdminService,JwtStratagy]
})
export class AdminModule {
  
}
