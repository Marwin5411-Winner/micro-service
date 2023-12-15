// app.controller.ts (Gateway)
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        @Inject('USER_SERVICE') private readonly clientA: ClientProxy,
        @Inject('PRODUCT_SERVICE') private readonly clientB: ClientProxy,
        @Inject('ORDER_SERVICE') private readonly clientC: ClientProxy,
    ) {}

  @Get()
  async getHello(): Promise<string> {
    const resultA = await this.clientA.send('getHello', '').toPromise();
    const resultB = await this.clientB.send('getHello', '').toPromise();
    const resultC = await this.clientC.send('getHello', '').toPromise();
    return this.appService.getHello(resultA, resultB);
  }
}