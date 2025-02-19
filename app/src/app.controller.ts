
// app.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { QueueService } from './queue/queue.service';

@Controller()
export class AppController {
  constructor(private readonly queueService: QueueService) {}

  @Post('addJob')
  async addJob(@Body() body: { message: string }) {
    await this.queueService.addJob(body);
    return { status: 'Job added to queue' };
  }
}