export class ErrorDto {
  statusCode: number;
  status: string;
  message: string;
  code: string;

  constructor(partial: Partial<ErrorDto>) {
    Object.assign(this, partial);
  }
}