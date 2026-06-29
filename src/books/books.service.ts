import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/entities/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Books) private BookRepo:Repository<Books>){}
   async create(createBookDto: CreateBookDto) {
    const newBook = this.BookRepo.create({...createBookDto,createdAt:Date.now()})
    const save = await this.BookRepo.save(newBook)
    return save;
  }

  findAll() {
    return this.BookRepo.find();
  }

  async findOne(id: number) {
    const book =await this.BookRepo.findOne({where:{id:id}})
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const updateBook = this.BookRepo.update(id,updateBookDto)
    return this.findOne(id);
  }

  remove(id: number) {
    return this.BookRepo.delete(id);
  }
}
