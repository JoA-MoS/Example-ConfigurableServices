import { GreeterConfig } from './services/greeter-config';
import { GreeterService } from './services/greeter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { Greeter } from './greeter';
import { QuietGreeter } from './quiet-greeter';
import { LoudGreeter } from './loud-greeter';
import { GreeterServiceFactory } from './services/greeter-service.factory';


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: GreeterConfig, useClass: Greeter },
    GreeterServiceFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
