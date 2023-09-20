import { HttpStatus } from '@nestjs/common';

export class SuccessDto {
  statusCode: number = HttpStatus.OK;
  status: string = HttpStatus[HttpStatus.OK];
  message: string;
  data: Object;

  constructor(message: string, data: Object) {
    this.message = message;
    this.data = data;
  }
}