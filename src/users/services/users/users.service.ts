import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user-entities/userEntity';
// import { CreateUserDto } from 'src/users/dtos/createUsers.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';



@Injectable()
export class UsersService {
    constructor(
@InjectRepository(User) private userRepository:Repository<User>
    ){}

    async CreateUser(userDetails:CreateUserParams){

        const hashedpassword = await bcrypt.hash(userDetails.password,12)
        const savedUser=this.userRepository.save({...userDetails,createdAt:Date(),password:hashedpassword});

        if(!savedUser){
            throw new HttpException("There was an Error Creating Your Account",HttpStatus.BAD_REQUEST)
        }
        return savedUser

    }
}
