import { Action } from "@ngrx/store";

export enum CounterActionTypes {
    More = '[Counter] More',
    Less = '[Counter] Less',
}

interface CounterPayload {
    id: number;
}

export class More implements Action {
    readonly type = CounterActionTypes.More;

    constructor(public payload: CounterPayload) {

    }
}

export class Less implements Action {
    readonly type = CounterActionTypes.Less;

    constructor(public payload: CounterPayload) {

    }
}

export type CounterActions =
    | More
    | Less;

