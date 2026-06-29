import { Injectable } from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport"
import { Profile } from "passport";
import { Strategy } from "passport-google-oauth20";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy){
    constructor(private readonly configService:ConfigService){
      
        super({
            clientID:configService.get('clientId')!,
            clientSecret:configService.get('ClientSecret')!,
            callbackURL:configService.get('callbackUrl')!,
            scope:['profile','email']
        })


    }
    async validate(accessToken:string,refreshToken:string,profile:Profile) {
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
    }
}