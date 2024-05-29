import { Message } from '../hello/message';
import { PingGateway } from '../hello/pingGateway';

export class PageNotFoundService {
  private readonly gateWay: PingGateway;
  constructor(gateWay: PingGateway) {
    this.gateWay = gateWay;
  }

  execute(): Promise<Message> {
    return this.gateWay.ping();
  }
}
