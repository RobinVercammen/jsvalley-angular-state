import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

interface CounterState {
  0: number,
  1: number,
  2: number,
  total: number,
}

const initialState: CounterState = {
  0: 0,
  1: 0,
  2: 0,
  total: 0,
}

@Injectable({
  providedIn: 'root'
})
export class CounterStore {
  private counterSubject$ = new BehaviorSubject<CounterState>(initialState);
  public counters$ = this.counterSubject$.asObservable();

  constructor() { }

  // return observable or promise or something the caller knows its done
  loadMore(counterId: number) {
    setTimeout(() => {
      this.more(counterId);
    });
  }

  more(counterId: number) {
    const current = this.counterSubject$.getValue();
    const next = { ...current, [counterId]: current[counterId] + 1, total: current.total + 1 };
    this.counterSubject$.next(next);
  }

  loadLess(counterId: number) {
    setTimeout(() => {
      this.less(counterId);
    });
  }

  less(counterId: number) {
    const current = this.counterSubject$.getValue();
    const next = { ...current, [counterId]: current[counterId] - 1, total: current.total - 1 };
    this.counterSubject$.next(next);
  }
}
