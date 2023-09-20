import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: `.env.${process.env.NODE_ENV}`,
    //   validationSchema: Joi.object({
    //     NODE_ENV: Joi.string().valid('development', 'stgaging', 'production').required(),
    //     DB_HOST: Joi.string().required(),
    //     DB_PORT: Joi.string().required(),
    //     DB_USERNAME: Joi.string().required(),
    //     DB_PASSWORD: Joi.string().required(),
    //     DB: Joi.string().required(),
    //   })
    // }),
  ]
  
})
export class GlobalConfigModule { }