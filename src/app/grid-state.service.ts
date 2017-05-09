import { Injectable } from '@angular/core';
import { State } from '@progress/kendo-data-query';

@Injectable()
export class GridStateService {
  private state: State = {
    filter: {
      filters: [],
      logic: 'or'
    },
    sort: [],
    skip: 0,
    take: 5
  };

  public getState() {
    return JSON.stringify(this.state);
  }

  public setState(state: State) {
    this.state = state;
  }
}
