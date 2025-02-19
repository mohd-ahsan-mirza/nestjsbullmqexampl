
// queue.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('messageQueue') private queue: Queue) {}

  async addJob(data: any) {
    await this.queue.add('messageJob', data, {
      delay: 5000, // Execute after 5 seconds
      priority: 1, // Higher priority
      attempts: 3, // Retry failed jobs up to 3 times
      backoff: { type: 'exponential', delay: 2000 }, // Retry strategy
      //rateLimiter: { max: 5, duration: 1000 }, // Rate-limit execution
    });
  }
}