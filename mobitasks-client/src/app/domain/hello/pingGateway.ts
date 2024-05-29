import { Message } from './message';

export interface PingGateway {
  ping(): Promise<Message>;
}
