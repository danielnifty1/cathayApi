import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { AuthService } from "./services/auth/auth.service";



@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy){
    private authService:AuthService
    constructor(){
        
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'mysecret',


        })
    }

    async validate(payload:any){
        // const user = await this.authService
        return{
            id:payload.sub,
            name:payload.email
        };
    }
}