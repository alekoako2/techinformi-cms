import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
} from '@angular/router'

export class CustomReuseStrategy implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {}

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.data['shouldReuse']) {
      return null
    }
    return this.handlers[route.data['key']]
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (route.data['shouldReuse']) {
      this.handlers[route.data['key']] = handle
    }
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data['shouldReuse']
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.data['shouldReuse'] && !!this.handlers[route.data['key']]
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    current: ActivatedRouteSnapshot
  ): boolean {
    return !!future.data['shouldReuse']
  }
}
