import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GridComponent } from './grid.component';
import { HomeComponent } from './home.component';
import { GridStateService } from './grid-state.service';
import { StateResolve } from './state-resolve';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'grid/:state',
    component: GridComponent,
    resolve: {
      state: StateResolve
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent, GridComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    InputsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GridStateService, StateResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
