import { CounterStore } from './../../services/counter.store';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;
  @Input() counterId;

  constructor(private counterStore: CounterStore) { }

  ngOnInit() {
    this.count$ = this.counterStore.counters$.pipe(
      map(c => c[this.counterId])
    );
  }

  more() {
    this.counterStore.loadMore(this.counterId);
  }
  less() {
    this.counterStore.loadLess(this.counterId);
  }
}
