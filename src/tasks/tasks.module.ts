import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaReadService } from 'src/prisma/prisma.service';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [TasksService, PrismaReadService],
})
export class TasksModule {}
