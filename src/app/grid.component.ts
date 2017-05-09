import { Component, OnInit } from '@angular/core';
import { GridStateService } from './grid-state.service';
import { ActivatedRoute } from '@angular/router';
import { State, process } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html'
})

export class GridComponent implements OnInit {
  public state: State;
  public gridData;

  constructor(private stateService: GridStateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(obj => this.state = JSON.parse(obj.state));
    this.gridData = process(sampleProducts, this.state);
  }

  public dataStateChange(state: State) {
    this.state = state;
    this.stateService.setState(state);
    this.gridData = process(sampleProducts, this.state);
  }
}
