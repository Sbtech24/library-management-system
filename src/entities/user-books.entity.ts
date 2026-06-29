import { BaseEntity } from "./base.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "./user.entity";
import { Books } from "./books.entity";


@Entity({name:"user_book"})
export class UserBook extends BaseEntity{

    @OneToOne(()=>User)
    @JoinColumn()
    user_id!:User

    @OneToOne(()=>Books)
    @JoinColumn()
    book_id!:Books

    @Column({default:false})
    is_read!:boolean

    @Column({ type: 'timestamptz' })
    read_at!:Date

}