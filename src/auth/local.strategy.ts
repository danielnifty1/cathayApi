import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local";
import { AuthService } from "./services/auth/auth.service";
import { UserLoginParam } from 'src/utils/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
constructor(private authservice:AuthService){
    super('local')
}

async validate(userDetails:UserLoginParam):Promise<any>{
    const user=this.authservice.UserLogin(userDetails)

    if(!user){
        throw new HttpException("No User Associated with the Email Provided", HttpStatus.BAD_REQUEST)



    }

    return user
}
}