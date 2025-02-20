// product.processor.ts
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('productQueue')
export class ProductQueueProcessor extends WorkerHost {
  async process(job: Job<any>): Promise<void> {
    try {
      console.log(`Processing product queue Job: ${job.id}`);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate async task
      console.log(`Job ${job.id}: ${JSON.stringify(job.data)} completed successfully.`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Job ${job.id} failed:`, error.message);
      } else {
        console.error('An unknown error occurred');
      }
      throw error; // Job will be retried automatically
    }
  }
}