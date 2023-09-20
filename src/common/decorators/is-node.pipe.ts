import { registerDecorator, ValidationOptions } from 'class-validator';

// Example
export function IsNode(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNode',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {
        message: 'Must be a string of the form ${e-exchangeId} or ${c-coinId-n-networkId}.',
        ...validationOptions,
      },
      validator: {
        validate(value: any) {
          const exchangeNodeRegex = /^e-(\d+)$/;
          const coinNodeRegex = /^c-(\d+)-n-(\d+)$/;
          return typeof value === 'string' && (exchangeNodeRegex.test(value) || coinNodeRegex.test(value));
        },
      },
    });
  };
}