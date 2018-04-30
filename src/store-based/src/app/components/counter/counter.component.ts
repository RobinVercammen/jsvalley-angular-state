import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Store } from '@ngrx/store';
import { More, Less } from '../../actions/counter-actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { State } from '../../app.module';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  @Input() counterId;

  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(
      map(c => c.counter),
      map(c => c[this.counterId])
    );
  }

  ngOnInit() {
  }

  more() {
    setTimeout(() => {
      this.store.dispatch(new More(this.counterId));
    });
  }
  less() {
    setTimeout(() => {
      this.store.dispatch(new Less(this.counterId));
    });
  }
}
