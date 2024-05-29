import { PageNotFoundService } from '../../domain/page-not-found/pageNotFoundService';
import { PingResource } from '../api/pingResource';

export function createPageNotFoundServiceService(): PageNotFoundService {
  const api = new PingResource();
  const service = new PageNotFoundService(api);
  return service;
}
