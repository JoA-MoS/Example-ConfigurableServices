import { Greeter } from '../greeter';
import { Injectable } from '@angular/core';
import { GreeterConfig } from './greeter-config';

@Injectable()
export class GreeterService {


  constructor(private config: GreeterConfig) { }

  greet(name: string): string {
    return this.config.greet(`${this.config.greeting} ${name}`);
  }

}


