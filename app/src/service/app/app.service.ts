// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ping(): string {
    return 'Hello from the app!';
  }
}