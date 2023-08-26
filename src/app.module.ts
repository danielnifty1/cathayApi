import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './typeorm/entities/userEntity';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),

    UsersModule,
    AuthModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
