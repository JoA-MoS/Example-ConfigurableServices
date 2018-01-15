import { Greeter } from '../greeter';
import { Injectable } from '@angular/core';
import { GreeterService } from './greeter.service';
import { GreeterConfig } from './greeter-config';

@Injectable()
export class GreeterServiceFactory {

  constructor(private config: GreeterConfig) {
  }

  public CreateService() {
    return new GreeterService(this.config);
  }

  public CreateServiceWithOptions(config: GreeterConfig) {
    return new GreeterService(config);
  }

}
