import { GreeterConfig } from './services/greeter-config';
import { Greeter } from './greeter';
import { Injectable } from '@angular/core';

@Injectable()
export class LoudGreeter extends GreeterConfig {
    public greeting: string = 'Yells';

    greet(text: string) {
        return text.toUpperCase() + '!!!';
    }
}
