import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';
import { StateService } from '../../services/state.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { State } from '../../app.module';

@Component({
  selector: 'app-counter-overview',
  templateUrl: './counter-overview.component.html',
  styleUrls: ['./counter-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOverviewComponent implements OnInit {
  counter$: Observable<number>;
  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(
      map(c => c.counter),
      map(c => c.total)
    );
  }

  ngOnInit() {
  }
}
