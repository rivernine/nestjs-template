import { Controller, Get, Query } from '@nestjs/common';
import { SuccessDto } from 'src/common/dtos/response/success.dto';
import { ErrorDto } from 'src/common/dtos/response/error.dto';
import { SampleException } from 'src/common/messages/service-exception.message';
import { CustomBadRequestException } from 'src/common/filters/http-exception.filter';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetSampleDto } from './dtos/request/get-sample.dto';
import { SampleService } from './sample.service';

@ApiTags('Sample')
@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) { }

  @ApiOperation({ summary: '샘플' })
  @Get('')
  async getSample(
    @Query() requestDto: GetSampleDto,
  ): Promise<SuccessDto | ErrorDto> {
    const result = await this.sampleService.getSample(requestDto)
    if (result.length === 0) {
      const exceptionObj = SampleException.EXCEPTION_CODE;
      throw new CustomBadRequestException(exceptionObj);
    }
    return new SuccessDto('성공', result)
  }

}
