import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';
import { CounterStore } from '../../services/counter.store';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-overview',
  templateUrl: './counter-overview.component.html',
  styleUrls: ['./counter-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOverviewComponent implements OnInit {
  total$: Observable<number>;

  constructor(counterStore: CounterStore) {
    this.total$ = counterStore.counters$.pipe(
      map(c => Object.keys(c).reduce((prev, curr) => prev + c[curr], 0))
    );
  }

  ngOnInit() {
  }
}
