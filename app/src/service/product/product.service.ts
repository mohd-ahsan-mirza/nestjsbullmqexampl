import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class ProductService {
    constructor(@InjectQueue('productQueue') private queue: Queue) {}
    ping(): string {
        return 'Product service is running'
    }

    async addProduct(product: Product) {
        await this.queue.add('productJob', product, {
            delay: 5000, // Execute after 5 seconds
            priority: 1, // Higher priority
            attempts: 3, // Retry failed jobs up to 3 times
            backoff: { type: 'exponential', delay: 2000 }, // Retry strategy
            //rateLimiter: { max: 5, duration: 1000 }, // Rate-limit execution
          });
    }
}