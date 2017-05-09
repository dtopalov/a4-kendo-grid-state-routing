import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GridStateService } from './grid-state.service';
import { State } from '@progress/kendo-data-query';

@Injectable()
export class StateResolve implements Resolve<State> {

  constructor(private gridStateService: GridStateService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.gridStateService.getState();
  }
}
