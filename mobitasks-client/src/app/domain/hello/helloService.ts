import { Message } from './message';
import { PingGateway } from './pingGateway';

export class HelloService {
  private readonly gateway: PingGateway;

  constructor(gateway: PingGateway) {
    this.gateway = gateway;
  }

  execute(): Promise<Message> {
    return this.gateway.ping();
  }
}
