import { HomeService } from '../../domain/home/homeService';
import { PingResource } from '../api/pingResource';

export function createHomeService(): HomeService {
  const api = new PingResource();
  const service = new HomeService(api);
  return service;
}
