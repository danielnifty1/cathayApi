import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user-entities/userEntity';
import { UserLoginParam } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    @InjectRepository(User) private userRepository: Repository<User>

    constructor(private readonly jwtService: JwtService) { }


   async UserLogin(userDetails:UserLoginParam){
        const email = userDetails.email;
        const password=userDetails.password

        const user= await this.userRepository.findOne({where:{email}})
 
        if(!user){
            throw new HttpException("No User Associated with the Email Provided", HttpStatus.BAD_REQUEST)
            
        }

        if(!await bcrypt.compare(password,user.password)){
            throw new HttpException("Invalid Password",HttpStatus.BAD_REQUEST)
        }

        const payload=  {email:user.email,sub:user.id};

        // const {userDetails.password, ...rest}=user
        return {
            access_token:this.jwtService.sign(payload)
        
    };

    }


 
}
