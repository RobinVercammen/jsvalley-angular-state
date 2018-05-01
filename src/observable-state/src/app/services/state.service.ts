import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public counters = {
    0: 0,
    1: 0,
    2: 0,
    total: 0,
  };

  constructor() { }
}
