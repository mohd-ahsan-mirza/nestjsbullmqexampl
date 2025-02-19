// product.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../../service/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('ping') // Handles GET requests to "/"
    ping(): string {
        return this.productService.ping()
    }

}