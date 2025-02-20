// product.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from 'app/src/service/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('ping') // Handles GET requests to "/"
    ping(): string {
        return this.productService.ping()
    }

    @Post()
    async addProduct(@Body() product: Product) {
        //Should sanitize input before sending into service
        this.productService.addProduct(product)
    }

}