import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Admin } from "src/typeorm/admin-entities/admin";
import { Cat } from "src/typeorm/admin-entities/category";
import {User} from 'src/typeorm/user-entities/userEntity'


export const typeOrmConfig:TypeOrmModuleOptions={
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: "root",
      password: "",
      database: "cathayapi",
      entities: [User,Admin,Cat],
      synchronize: true
}


