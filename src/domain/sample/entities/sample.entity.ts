import { Column, Entity, PrimaryColumn } from 'typeorm/index';
import { SampleDto } from '../dtos/response/sample.dto';

@Entity({ name: 'sample' })
export class Sample {
  @PrimaryColumn()
  id: number;

  toSampleDto() {
    return SampleDto.fromEntity(
      this.id
    )
  }
}