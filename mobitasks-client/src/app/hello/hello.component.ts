import { Component } from '@angular/core';
import { PingResourceApi } from 'mobitasks-server';
import { HelloService } from '../domain/hello/helloService';
import { createHelloService } from '../infrastructure/service/helloServiceFactory';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
  providers: [
    {
      provide: HelloService,
      useFactory: createHelloService,
    },
  ],
})
export class HelloComponent {
  constructor(private readonly helloService: HelloService) {}

  sayHello(): void {
    this.helloService.execute().then((data) => console.log(data));
  }
}
