import { Injectable } from '@nestjs/common';

@Injectable()
export class EngWordService {
  async getMainPage() {
    return 'HELLO, WORLD';
  }
}
