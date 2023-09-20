import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class GetSampleDto {
  @ApiProperty({ description: 'sample', required: true })
  @IsOptional()
  sample: string;
}