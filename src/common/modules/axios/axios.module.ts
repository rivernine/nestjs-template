import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HttpConfig } from 'src/common/configs/http.config';
import { AxiosService } from './axios.service';

@Module({
  imports: [
    HttpModule.registerAsync({ useClass: HttpConfig }),
  ],
  providers: [AxiosService],
  exports: [AxiosService]
})
export class AxiosModule { }