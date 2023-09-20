import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {

  constructor(private readonly config: ConfigService) { }

  /**
   * Typeorm 설정
   */
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.config.get('DB_HOST'),
      port: parseInt(this.config.get('DB_PORT'), 10),
      username: this.config.get('DB_USERNAME'),
      password: this.config.get('DB_PASSWORD'),
      database: this.config.get('DB'),
      entities: ['dist/**/*.entity.{ts,js}'],
      namingStrategy: new SnakeNamingStrategy(), // snake_case -> camelCase
      // logging: ["error", "query"],
      // logging: ["error"],
      charset: 'utf8mb4',
      timezone: '+09:00'
    };
  }
}