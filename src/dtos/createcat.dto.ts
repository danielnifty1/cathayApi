import { IsEmail, IsNotEmpty } from "class-validator"
import Role from "src/enum/role.enum"

export class CreateCatDto{
    @IsNotEmpty()
    name:string


    @IsNotEmpty()
    description:string
}