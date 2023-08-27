import { IsEmail, IsNotEmpty } from "class-validator"
import Role from "src/enum/role.enum"

export class CreateAdminDto{
    @IsNotEmpty()
    name:string
    @IsEmail()
    email:string

    @IsNotEmpty()
    phone:number

 
    createdAt:string

    @IsNotEmpty()
    password:string


    role:[]
    


}