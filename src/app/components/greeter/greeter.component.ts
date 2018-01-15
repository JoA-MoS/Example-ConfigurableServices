import { QuietGreeter } from '../../quiet-greeter';
import { LoudGreeter } from '../../loud-greeter';
import { GreeterServiceFactory } from '../../services/greeter-service.factory';
import { Component, OnInit } from '@angular/core';
import { GreeterService } from '../../services/greeter.service';
import { Greeter } from '../../greeter';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent implements OnInit {

  loudGreeting: string;
  greeting: string;
  quietGreeting: string;
  private greeter: GreeterService;
  private loudGreeter: GreeterService;
  private quietGreeter: GreeterService;
  private conf: Greeter = new Greeter;
  private loudConf: LoudGreeter = new LoudGreeter;
  private quietConf: QuietGreeter = new QuietGreeter;
  constructor(private greeterFactory: GreeterServiceFactory) {
    this.greeter = this.greeterFactory.CreateService();
    this.loudGreeter = this.greeterFactory.CreateServiceWithOptions(this.loudConf);
    this.quietGreeter = this.greeterFactory.CreateServiceWithOptions(this.quietConf);
  }

  ngOnInit() {
    this.greeting = this.greeter.greet('Justin Dietz');
    this.loudGreeting = this.loudGreeter.greet('Justin Dietz');
    this.quietGreeting = this.quietGreeter.greet('Justin Dietz');

  }

}
