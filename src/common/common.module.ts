import { Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from 'src/common/configs/typeorm.config';
import { CustomHttpExceptionFilter } from './filters/http-exception.filter';
import { CustomValidationPipe } from './pipes/custom-validation.pipe';
import { GlobalConfigModule } from './modules/global-config/global-config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig,
    }),
    GlobalConfigModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomHttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useFactory: () => new CustomValidationPipe({
        transform: true,
        transformOptions: {
          enableImplicitConversion: true
        }
      })
    }
  ]
})
export class CommonModule { }