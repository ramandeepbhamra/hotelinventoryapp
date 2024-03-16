import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { ROUTE_CONFIG_TOKEN } from './routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(
    @Inject(ROUTE_CONFIG_TOKEN)
    private configToken: RouteConfig
  ) {
    console.log('ConfigService Title');
    console.log('Check Title', configToken.title);
  }
}
