import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";
import { BookCategory } from "src/utils/enum";


@Entity({name:'books'})
export class Books extends BaseEntity{
    @Column({nullable:true})
    title!:string

    @Column()
    author!:string

    @Column({length:17,type:"varchar",unique:true})
    isbn!:string

    // enum
    @Column({
        type:'enum',
        enum:BookCategory
    })
    category!:BookCategory

    @Column()
    description!:string

    @Column()
    quantity!:number





}