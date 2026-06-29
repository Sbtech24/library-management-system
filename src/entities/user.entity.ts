import { Entity,Column } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Role } from "src/utils/enum";

@Entity({name:'users'})
export class User extends BaseEntity{
    @Column()
    name!:string

    @Column({unique:true})
    email!:string

    @Column({default:null,nullable:true})
    avatar!:string

    @Column({
        type:'enum',
        enum:Role
    })
    role!:string

    @Column()
    refresh_token!:string

    @Column()
    provider!:string

    @Column()
    provider_id!: number
    
}