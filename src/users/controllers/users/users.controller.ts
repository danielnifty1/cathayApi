import { Body, Controller, Post,ValidationPipe,UsePipes } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUsers.dto';

import {UsersService} from 'src/users/services/users/users.service'

@Controller('users')
@UsePipes(new ValidationPipe())

export class UsersController {

    constructor(private userService:UsersService){}

    @Post()
// creating user account
CreatUser(@Body() CreateUserDto:CreateUserDto){
return this.userService.CreateUser(CreateUserDto)


}


}
