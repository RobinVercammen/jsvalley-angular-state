import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-counter-overview',
  templateUrl: './counter-overview.component.html',
  styleUrls: ['./counter-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOverviewComponent implements OnInit {
  constructor(public state: StateService) {

  }

  ngOnInit() {
  }
}
