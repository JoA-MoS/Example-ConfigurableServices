import { Injectable } from '@angular/core';

@Injectable()
export abstract class GreeterConfig {
    // you need to exted this class and sepcify what you want these properties to be and these functions to do

    public greeting: string;

    greet(text: string) {
        return text;
    }
}
