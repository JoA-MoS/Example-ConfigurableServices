import { GreeterConfig } from './services/greeter-config';
import { Injectable } from '@angular/core';

@Injectable()
export class Greeter extends GreeterConfig {

    public greeting: string = 'Hello';
}
