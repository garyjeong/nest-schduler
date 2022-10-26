import { Module } from '@nestjs/common';
import { PrismaWriteService, PrismaReadService } from './prisma.service';

@Module({
  providers: [PrismaWriteService, PrismaReadService],
  exports: [PrismaWriteService, PrismaReadService],
})
export class PrismaModule {}
