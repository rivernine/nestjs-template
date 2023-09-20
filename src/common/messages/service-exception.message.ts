import { HttpStatus } from '@nestjs/common';

import { ErrorDto } from 'src/common/dtos/response/error.dto';

export class SampleException {

  static EXCEPTION_CODE: ErrorDto = {
    statusCode: HttpStatus.BAD_REQUEST,
    status: HttpStatus[HttpStatus.BAD_REQUEST],
    message: '에러메세지',
    code: 'EXCEPTION_CODE',
  }

}

export class Exception_2 {

  static EXCEPTION_CODE: ErrorDto = {
    statusCode: HttpStatus.BAD_REQUEST,
    status: HttpStatus[HttpStatus.BAD_REQUEST],
    message: '에러메세지',
    code: 'EXCEPTION_CODE',
  }

}
