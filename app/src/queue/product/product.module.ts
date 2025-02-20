// queue.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ProductService } from 'app/src/service/product/product.service';
import { ProductQueueProcessor } from './product.processor';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'redis',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'productQueue',
    }),
  ],
  providers: [ProductService, ProductQueueProcessor],
  exports: [ProductService],
})
export class ProductModule {}