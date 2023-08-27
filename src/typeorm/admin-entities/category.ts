import Role from "src/enum/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"category"})

export class Cat{
    @PrimaryGeneratedColumn()
    id:number;


    @Column({unique:true})
    name:string;
    
    @Column()
    description:string;

   @Column()
   createdBy:string;
   @Column()
   createdAt:string


} 