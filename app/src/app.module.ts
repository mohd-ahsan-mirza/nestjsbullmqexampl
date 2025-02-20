import { Module } from '@nestjs/common';
import { QueueModule } from './queue/example/queue.module';
import { AppController } from './controller/app/app.controller';
import { AppService } from './service/app/app.service';
import { ProductController } from './controller/product/product.controller';
import { ProductModule } from './queue/product/product.module';

@Module({
  imports: [QueueModule, ProductModule],
  controllers: [AppController, ProductController, ProductController],
  providers: [AppService],
})
export class AppModule {}  // Ensure this line is present
