import { PingResource } from '../api/pingResource';
import { HelloService } from '../../domain/hello/helloService';

export function createHelloService(): HelloService {
  const api = new PingResource();
  const service = new HelloService(api);
  return service;
}
