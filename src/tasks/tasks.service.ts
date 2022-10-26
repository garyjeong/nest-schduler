import axios, { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { lastValueFrom, map, Observable } from 'rxjs';
import { PrismaReadService } from 'src/prisma/prisma.service';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import imaps from 'imap-simple';
import { simpleParser } from 'mailparser';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

@Injectable()
export class TasksService {
  constructor(
    private readonly httpService: HttpService,
    private readonly prismaReadService: PrismaReadService,
  ) {
    dayjs.extend(timezone);
    dayjs.extend(utc);
  }

  private readonly exchangeURL = 'https://api.exchangerate.host';
  private readonly logger = new Logger(TasksService.name);

  private readonly config = {
    imap: {
      user: 'info@trimo.ai',
      password: 'Trimo123$',
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      tlsOptions: {
        rejectUnauthorized: false,
      },
      authTimeout: 3000,
    },
  };

  @Cron(CronExpression.EVERY_5_SECONDS)
  async Cron() {
    try {
      const before = dayjs()
        .utc()
        .subtract(1, 'day')
        .format('YYYY-MM-DD HH:mm:00');
      const now = dayjs().utc().format('YYYY-MM-DD HH:mm:00');

      const reservations = await this.prismaReadService.reservation.findMany({
        where: {
          date_request: {
            gt: new Date(before),
            lte: new Date(now),
          },
        },
        select: {
          res_id: true,
          email: true,
          agent_name: true,
        },
      });

      const connection = await imaps.connect(this.config);

      await connection.openBox('INBOX');
      reservations.map((reservation) =>
        connection
          .search(
            ['ALL', ['SUBJECT', `My Hertz Reservation ${reservation.res_id}`]],
            {
              bodies: ['HEADER', 'TEXT', ''],
              markSeen: false,
              struct: true,
            },
          )
          .then((messages) => {
            messages.forEach((message) => {
              const header = message.parts.find(
                (item) => item.which === 'HEADER',
              );
              const body = message.parts.find((item) => item.which === 'TEXT');

              const mailOptions =
                reservation.agent_name === 'Myrealtrip'
                  ? {
                      from: 'info@trimo.ai',
                      to: reservation.email,
                      cc: 'help@myrealtrip.com',
                      subject: header.body['subject'][0],
                      html: body.body,
                    }
                  : {
                      from: 'info@trimo.ai',
                      to: reservation.email,
                      subject: header.body['subject'][0],
                      html: body.body,
                    };

              const transporter = nodemailer.createTransport(
                smtpTransport({
                  service: 'gmail',
                  host: 'smtp.gmail.com',
                  auth: {
                    user: 'info@trimo.ai',
                    pass: 'Trimo123$',
                  },
                }),
              );

              transporter.sendMail(mailOptions, (err, info) => {
                if (err) throw err;
                console.log(`Mail Sent : ${info}`);
              });
            });
          })
          .catch((err) => {
            console.log(err);
            throw err;
          })
          .finally(() => {
            connection.closeBox(true);
            connection.end();
          }),
      );
    } catch (e) {
      console.log('ERROR: ', e);
    }
  }
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

  // @Cron(CronExpression.EVERY_5_SECONDS)
  // async callExchangeRate() {
  //   const response = await lastValueFrom(
  //     this.httpService.get('/latest', {
  //       baseURL: this.exchangeURL,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }),
  //   );
  //   // .subscribe({
  //   //   next(response) {
  //   //     // console.log(response.data.rates);
  //   //     return response.data.rates;
  //   //   },
  //   // });
  //   // .pipe(
  //   //   map((response) => {
  //   //     console.log(response);
  //   //     return response;
  //   //   }),
  //   // );
  //   // const response = await axios.get('/latest', {
  //   //   baseURL: this.exchangeURL,
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   // });
  //   console.log(JSON.stringify(response));
  // }
}
