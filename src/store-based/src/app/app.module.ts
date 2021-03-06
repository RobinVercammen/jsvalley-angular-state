import { CounterEffects } from './effects/counter-effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterOverviewComponent } from './components/counter-overview/counter-overview.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducer, State as CounterState } from './reducers/counter-reducers';
import { EffectsModule } from '@ngrx/effects';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: reducer
};

@NgModule({
  declarations: [
    AppComponent,
    CounterOverviewComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([CounterEffects]),
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
