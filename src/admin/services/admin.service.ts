import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeorm/admin-entities/admin';
import { AdminLoginParam, CreateAdminParams, CreateCatParam } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import Role from 'src/enum/role.enum';
import { STATUS_CODES } from 'http';
import { JwtService } from '@nestjs/jwt';
import { Cat } from 'src/typeorm/admin-entities/category';


@Injectable()
export class AdminService {
   
        @InjectRepository(Admin) private adminRepository: Repository<Admin>

        @InjectRepository(Cat) private catRepository: Repository<Cat>

  

    constructor(private readonly jwtService: JwtService) { }

    async CreateAdmin(adminDetails: CreateAdminParams) {
        // const Rolevalues = Object.values(Role);
        // const role=adminDetails.role;
        // if(!Rolevalues.includes(role as unknown as Role)){
        //     throw new HttpException("Invalid Role Selected  ",HttpStatus.BAD_REQUEST)

        // }
        const hashedpassword = await bcrypt.hash(adminDetails.password, 12)
        const saveadmin = this.adminRepository.save({ ...adminDetails, password: hashedpassword, createdAt: Date() })
        if (!saveadmin) {
            throw new HttpException("There was an Error Creating Your Account", HttpStatus.BAD_REQUEST)


        }

        return saveadmin

    }

    async CreateCat(CatDetails:CreateCatParam){

        // const creator=payload.
         
      const saved  =await this.catRepository.save({...CatDetails, createdAt:Date()})

      if(!saved){
        // throw new HttpException("There was an Error Creating Your Account", HttpStatus.BAD_REQUEST)

        throw new HttpException('There was an Error Creating Your Account', HttpStatus.BAD_REQUEST, {
            cause: new Error('Cause Error'),
           })

      }
      return saved
    }




    // admin Login
    async AdminLogin(AdminLoginDetails:AdminLoginParam){

        const email = AdminLoginDetails.email;
        const password=AdminLoginDetails.password

        const admin= await this.adminRepository.findOne({where:{email}})

        if(!admin){
            throw new HttpException("No Admin Associated with the Email Provided", HttpStatus.BAD_REQUEST)
            
        }
        if(!await bcrypt.compare(password,admin.password)){
            throw new HttpException("Invalid Password",HttpStatus.BAD_REQUEST)
        }

        const payload=  {email:admin.email,sub:admin.id,role:admin.role};

        return {
            access_token:this.jwtService.sign(payload),
            admin_role:admin.role

        }


    }


    FetchCategory(){
        return this.catRepository.find()
    }
    FetchCategoryById(id:number){
        return this.catRepository.findOneBy({id});
    }


   async DeletCategoryById(id:number){
        const cat= await this.catRepository.findOneBy({id});
        
        if(!cat){
            throw new HttpException(`Category with id "${id}"  does not exist `, HttpStatus.BAD_REQUEST)
            
        }
         await this.catRepository.delete({id});

return{
    msg:"category with the following details deleted permanently",
    name:cat.name,
    cat:cat.description

}
    }
}
