import { InjectionToken } from "@angular/core";
import { RouteConfig } from "./routeConfig";

export const ROUTE_CONFIG_TOKEN = new InjectionToken<RouteConfig>('routeConfig');