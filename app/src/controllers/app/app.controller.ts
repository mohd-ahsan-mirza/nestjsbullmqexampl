
// app.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { QueueService } from '../../service/queue/queue.service';
import { AppService } from '../../service/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly queueService: QueueService, private readonly appService: AppService) {}

  @Post('addJob')
  async addJob(@Body() body: { message: string }) {
    await this.queueService.addJob(body);
    return { status: 'Job added to queue' };
  }

  @Get('ping') // Handles GET requests to "/"
  getHello(): string {
    return this.appService.ping();
  }
}