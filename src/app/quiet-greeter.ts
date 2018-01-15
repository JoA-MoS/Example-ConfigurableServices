import { GreeterConfig } from './services/greeter-config';
import { Greeter } from './greeter';
import { Injectable } from '@angular/core';

@Injectable()
export class QuietGreeter extends GreeterConfig {
    public greeting: string = 'Whispers';
    greet(text: string) {
        return text.toLowerCase();
    }
}
