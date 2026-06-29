import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './utils/Guards';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    async Login(){
        return { msg: 'google authentication' }
    }


    // callback 

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    async handleRedirect(){
        return this.authService.validateUser()

    }
}
