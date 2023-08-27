import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './typeorm/user-entities/userEntity';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),

    UsersModule,
    AuthModule,
    AdminModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
