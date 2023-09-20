import { HttpException, HttpStatus, ValidationError, ValidationPipe as NestValidationPipe } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { ErrorDto } from 'src/common/dtos/response/error.dto';

export class CustomValidationPipe extends NestValidationPipe {
  public createExceptionFactory() {
    return (validationErrors: ValidationError[] = []) => {
      if (this.isDetailedOutputDisabled) {
        return new HttpErrorByCode[this.errorHttpStatusCode]();
      }
      const errorDto = this.getExceptionObj(validationErrors);
      return new HttpException(errorDto, HttpStatus.BAD_REQUEST);
    };
  }

  protected getExceptionObj(validationErrors: ValidationError[]): ErrorDto {
    const error = validationErrors[0];
    const constraints = error.constraints;
    const key = constraints ? Object.keys(constraints)[0] : undefined;
    const errorCode = error.contexts;
    const code = errorCode?.[key]['code'];
    const message = error.constraints?.[key];
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      status: HttpStatus[HttpStatus.BAD_REQUEST],
      message: message,
      code: code ? code : "UNDEFINED_CODE"
    }

  }
}

// Template
// import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
// import { CustomBadRequestException } from "src/common/filters/http-exception.filter";
// import { ValidationException } from "src/common/messages/validation-exception.message";

// @Injectable()
// export class IsNode implements PipeTransform<string, string> {
//   transform(value: string, metadata: ArgumentMetadata): string {
//     if (typeof value === 'string' && (/^e-(\d+)$/.test(value) || /^c-(\d+)-n-(\d+)$/.test(value))) {
//       return value;
//     }
//     throw new CustomBadRequestException(ValidationException.MUST_NODE);
//   }
// }