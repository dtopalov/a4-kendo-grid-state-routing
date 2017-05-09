import { Component } from '@angular/core';
import { GridStateService } from './grid-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private stateService: GridStateService) {};
}
