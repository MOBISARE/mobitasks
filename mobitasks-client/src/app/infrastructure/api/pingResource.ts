import { PingResourceApi } from 'mobitasks-server';
import { Message } from '../../domain/hello/message';
import { PingGateway } from '../../domain/hello/pingGateway';

export class PingResource implements PingGateway {
  private readonly api: PingResourceApi;

  constructor() {
    this.api = new PingResourceApi();
  }

  ping(): Promise<Message> {
    return this.api.pingGet().then((pm) => {
      return {
        value: pm.text,
      } as Message;
    });
  }
}
