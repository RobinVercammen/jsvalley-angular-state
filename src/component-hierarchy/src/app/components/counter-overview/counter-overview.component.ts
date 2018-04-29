import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';

@Component({
  selector: 'app-counter-overview',
  templateUrl: './counter-overview.component.html',
  styleUrls: ['./counter-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOverviewComponent implements OnInit {
  @Input() totalCount = 0;
  @Input() counters: { [x: number]: number };

  @Output() more = new EventEmitter<number>();
  @Output() less = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
}
