import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaWriteClient } from '../../prisma/generated/client-rw';
import { PrismaClient as PrismaReadClient } from '../../prisma/generated/client-ro';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaWriteService
  extends PrismaWriteClient
  implements OnModuleDestroy, OnModuleInit
{
  async onModuleInit() {
    this.$connect;
  }

  async onModuleDestroy() {
    this.$disconnect;
  }
}

export class PrismaReadService
  extends PrismaReadClient
  implements OnModuleDestroy, OnModuleInit
{
  async onModuleInit() {
    this.$connect;
  }

  async onModuleDestroy() {
    this.$disconnect;
  }
}
