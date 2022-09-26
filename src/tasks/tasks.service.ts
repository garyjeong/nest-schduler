import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  constructor(private readonly httpService: HttpService) {}

  private readonly exchangeURL = 'https://api.exchangerate.host';
  private readonly logger = new Logger(TasksService.name);

  //   @Cron('45 * * * * *')
  //   handleCron_1() {
  //     this.logger.debug('CALL_1');
  //   }

  //   @Cron('15 * * * * *')
  //   handleCron_2() {
  //     this.logger.debug('CALL_2');
  //   }

  //   @Cron(CronExpression.EVERY_30_SECONDS)
  //   handleCron_3() {
  //     this.logger.debug('CALL_3');
  //   }

  @Cron(CronExpression.EVERY_5_SECONDS)
  async callExchangeRate() {
    // const response = await this.httpService.get(
    //   'https://api.exchangerate.host/latest',
    // );
    const response = await axios.get('/latest', {
      baseURL: this.exchangeURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.rates);
  }
}
