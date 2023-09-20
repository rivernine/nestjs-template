import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Sample } from './entities/sample.entity';

@Injectable()
export class SampleService {

  constructor(
    @InjectRepository(Sample)
    private sampleRepository: Repository<Sample>
  ) {
    this.sampleRepository = sampleRepository;
  }

  getSample(): Promise<Sample[]> {
    return this.sampleRepository
      .createQueryBuilder()
      .getMany();
  }

}
