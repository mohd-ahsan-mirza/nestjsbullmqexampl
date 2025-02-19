import { Module } from '@nestjs/common';
import { QueueModule } from './queue/queue.module';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './service/app/app.service';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './service/product/product.service';

@Module({
  imports: [QueueModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}  // Ensure this line is present
