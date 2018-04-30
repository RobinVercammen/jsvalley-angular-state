import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  @Input() counterId;

  constructor(public state: StateService) { }

  ngOnInit() {
  }

  more() {
    setTimeout(() => {
      this.state.counters[this.counterId]++;
      this.state.counters.total++;
    });
  }
  less() {
    setTimeout(() => {
      this.state.counters[this.counterId]--;
      this.state.counters.total--;
    });
  }
}
