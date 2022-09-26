import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    @Cron('45 * * * * *')
    handleCron_1() {
        this.logger.debug('CALL_1');
    }


    @Cron('5 * * * * *')
    handleCron_2() {
        this.logger.debug('CALL_2');
    }


    @Cron(CronExpression.EVERY_30_SECONDS)
    handleCron_3() {
        this.logger.debug('CALL_3');
    }
}
