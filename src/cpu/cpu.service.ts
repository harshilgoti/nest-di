import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}
  compute(a: number, b: number) {
    this.powerService.token = '55';
    this.powerService.supplyPower(10);
    return a + b;
  }
}
