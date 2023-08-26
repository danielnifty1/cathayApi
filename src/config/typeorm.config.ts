import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import {User} from 'src/typeorm/entities/userEntity'


export const typeOrmConfig:TypeOrmModuleOptions={
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: "",
      database: "cathayapi",
      entities: [User],
      synchronize: true
}


