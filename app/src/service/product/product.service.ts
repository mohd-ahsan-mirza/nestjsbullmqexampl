import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    ping(): string {
        return 'Product service is running'
    }
}