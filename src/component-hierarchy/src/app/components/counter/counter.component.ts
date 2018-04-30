import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  @Input() count = 0;

  @Output() more = new EventEmitter();
  @Output() less = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireMore() {
    setTimeout(() => {
      this.more.emit();
    });
  }

  fireLess() {
    setTimeout(() => {
      this.less.emit();
    });
  }
}
