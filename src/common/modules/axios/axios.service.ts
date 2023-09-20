import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AxiosService {

  private readonly logger = new Logger(AxiosService.name);

  constructor(private readonly httpService: HttpService) { }

  async get(url: string, config?: any): Promise<any> {
    try {
      const response = await this.httpService.axiosRef.get(url, config)
      return response.data;
    } catch (err) {
      // this.logger.error(`${url} | ${JSON.stringify(config)} | ${JSON.stringify(err.response.data)}`);
      return null;
    }
  }

  async post(url: string, data?: any, config?: any): Promise<any> {
    try {
      const response = await this.httpService.axiosRef.post(url, data, config);
      return response.data;
    } catch (err) {
      this.logger.error(`${url} | ${data} | ${config} | ${err.response.data}`);
      return null;
    }
  }

}
