import Role from "src/enum/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name:"admin"})

export class Admin{
    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    name:string;
    
    @Column({unique:true})
    email:string;

    @Column()
    phone:number;

    @Column()
    createdAt:string;

    @Column()
    password:string;

    @Column({
        type: 'enum',
         enum: Role,
         default:Role.User
    })
    role:[];


} 