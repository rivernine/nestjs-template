import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SampleController } from 'src/domain/sample/sample.controller';
import { SampleService } from 'src/domain/sample/sample.service';
import { Sample } from './entities/sample.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  controllers: [SampleController],
  providers: [SampleService],
  exports: [SampleService]
})
export class SampleModule { }