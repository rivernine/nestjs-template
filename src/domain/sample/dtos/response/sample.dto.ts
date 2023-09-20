import { Expose } from "class-transformer";

export class SampleDto {
  @Expose({ name: 'id' })
  id: number;

  static fromEntity(
    id: number,
  ) {
    const dto = new SampleDto();
    dto.id = id;

    return dto;
  }
}