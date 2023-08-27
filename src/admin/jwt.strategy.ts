import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { AdminService } from "./services/admin.service";
import { Admin } from 'src/typeorm/admin-entities/admin';
import { Repository } from 'typeorm';

import { InjectRepository } from "@nestjs/typeorm";
import Role from "src/enum/role.enum";



@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy){
    private AdminService:AdminService
    @InjectRepository(Admin) private adminRepository: Repository<Admin>

    constructor(){
        
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:'adminsecret',


        })
    }

    async validate(payload:any){
     

        // const admin= await this.adminRepository.findOne({where:payload.email})
console.log(payload.role)
    // const Rolevalues = Object.values(Role);
    //     const role=admin.role;
       
        //  if(!Rolevalues.includes(role as unknown as Role)){
        //  throw new HttpException("Invalid Role Selected  ",HttpStatus.BAD_REQUEST)

        //  }


        if(payload.role!="Super-Admin"){
        throw new HttpException("You are authorised to visit this route ",HttpStatus.BAD_REQUEST)
           
        }

        return{
            id:payload.sub,
            name:payload.email,
            role:payload.role
        };




       
    }
}