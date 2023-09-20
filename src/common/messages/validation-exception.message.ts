import { HttpStatus } from '@nestjs/common';

import { ErrorDto } from 'src/common/dtos/response/error.dto';

/**
 * Validation Exception 정의
 */
export class ValidationException {

  static MUST_OBJ: ErrorDto = {
    statusCode: HttpStatus.BAD_REQUEST,
    status: HttpStatus[HttpStatus.BAD_REQUEST],
    message: 'Must be a object.',
    code: 'MUST_OBJ',
  }

}