import { Body, Controller, Post, UseGuards,Request, Get } from '@nestjs/common';
import { UserLoginDto } from 'src/users/dtos/UserLogin.dto';
// import {Request} from 'express'

import {AuthService} from 'src/auth/services/auth/auth.service'
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { AuthenticatedGuard } from 'src/auth/guards/auth/authenticated.guard';
import { JwtAuthGuard } from 'src/auth/guards/auth/jwt-auth-guard';

@Controller('auth')
export class AuthController {


    constructor(private authService:AuthService){

    }

    @Post()
@UseGuards(AuthGuard)
    UserLogin(@Body() UserLoginDto:UserLoginDto){

         return this.authService.UserLogin(UserLoginDto)
}

@UseGuards(JwtAuthGuard)

@Get('protected')
ProtectedRoute(@Request() req):string{
    return req.user 
}
}
