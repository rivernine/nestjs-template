import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { ErrorDto } from 'src/common/dtos/response/error.dto';

export class CustomBadRequestException extends HttpException {

  constructor(exceptionObj: ErrorDto) {
    super(exceptionObj, HttpStatus.BAD_REQUEST);
  }

}

@Catch(HttpException)
export class CustomHttpExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionObj = exception.getResponse();
    response
      .status(status)
      .json({
        statusCode: exceptionObj['statusCode'],
        status: exceptionObj['status'],
        message: exceptionObj['message'],
        code: exceptionObj['code'],
      });
  }

}