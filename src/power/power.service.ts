import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  token: string;
  constructor() {
    this.token = '1253';
  }
  supplyPower(watts: number) {
    console.log(`Supplying wats is ${watts}`);
  }
}
