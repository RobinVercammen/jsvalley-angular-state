import { Action } from "@ngrx/store";

export enum CounterActionTypes {
    MoreAsync = '[Counter] More Async',
    More = '[Counter] More',
    LessAsync = '[Counter] Less Async',
    Less = '[Counter] Less',
}

interface CounterPayload {
    id: number;
}

export class MoreAsync implements Action {
    readonly type = CounterActionTypes.MoreAsync;

    constructor(public payload: CounterPayload) {

    }
}

export class More implements Action {
    readonly type = CounterActionTypes.More;

    constructor(public payload: CounterPayload) {

    }
}

export class LessAsync implements Action {
    readonly type = CounterActionTypes.LessAsync;

    constructor(public payload: CounterPayload) {

    }
}

export class Less implements Action {
    readonly type = CounterActionTypes.Less;

    constructor(public payload: CounterPayload) {

    }
}

export type CounterActions =
    | MoreAsync
    | More
    | LessAsync
    | Less;

