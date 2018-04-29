import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  totalCount = 0;

  counters = { 0: 0, 1: 0, 2: 0 }

  more($event: number) {
    this.totalCount++;
    this.counters[$event]++;
  }

  less($event: number) {
    this.totalCount--;
    this.counters[$event]--;
  }
}
