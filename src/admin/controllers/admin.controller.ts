import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from '../services/admin.service';
import { CreateAdminDto } from 'src/dtos/createadmin.dto';
import { CreateCatDto } from 'src/dtos/createcat.dto';
import { AdminLoginDto } from 'src/dtos/adminlogin.dto';
import { JwtAdminAuthGuard } from 'src/admin/guard/jwt-adminauth-guard';


@Controller('admin-api/')
@UsePipes(new ValidationPipe())
export class AdminController {
    constructor(private adminService:AdminService){

    }


    // create Admin
@Post()
CreateAdmin(@Body() CreateAdminDto: CreateAdminDto){
    return this.adminService.CreateAdmin(CreateAdminDto)
}


// create Cat
@Post('create-cat')
@UseGuards(JwtAdminAuthGuard)
CreateCat(@Body() CreateCatDto:CreateCatDto){
return this.adminService.CreateCat(CreateCatDto)
}


// admin Login
@Post('login')
AdminLogin(@Body() AdminLoginDto:AdminLoginDto){
return this.adminService.AdminLogin(AdminLoginDto)
}


// fetch category


@Get('category')
FetchCategory(){
return this.adminService.FetchCategory()
}


@Get('category/:id')
FetchCategoryById(@Param("id",ParseIntPipe) id:number){
return this.adminService.FetchCategoryById(id)
}


@Get('category/delete/:id')
@UseGuards(JwtAdminAuthGuard)

DeletCategoryById(@Param("id",ParseIntPipe) id:number){
return this.adminService.DeletCategoryById(id)
}

}
