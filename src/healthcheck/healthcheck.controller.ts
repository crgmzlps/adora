

import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
// import { 
//   HealthCheckService, 
//   HttpHealthIndicator, 
//   HealthCheck 
// } from '@nestjs/terminus';

@Controller()
export class HealthcheckController {
  constructor(
    // private health: HealthCheckService,
    // private http: HttpHealthIndicator,
  ) {}

  @Get()
  // @HealthCheck()
  check() {
    return {
      status: 'ok lambda 4'
    };
  }

  @Get('hello/en')
  getHello() {
    return {
      status: "EN de Sobral"
    };
  }
}