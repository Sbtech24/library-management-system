import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './entities/books.entity';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:"admin",
    database:'librarydb',
    synchronize:true,
    entities:[Books,User]
  }), BooksModule, AuthModule,ConfigModule.forRoot({
    isGlobal:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
