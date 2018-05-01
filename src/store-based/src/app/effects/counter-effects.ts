import { More, CounterActionTypes, MoreAsync, LessAsync, Less } from './../actions/counter-actions';
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { mergeMap, timeout, map, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CounterEffects {
    @Effect()
    more$: Observable<Action> = this.actions$.pipe(
        ofType(CounterActionTypes.MoreAsync),
        mergeMap((action: MoreAsync) =>
            of({}).pipe(
                timeout(0),
                map(() => new More(action.payload))
            )
        )
    );

    @Effect()
    less$: Observable<Action> = this.actions$.pipe(
        ofType(CounterActionTypes.LessAsync),
        mergeMap((action: LessAsync) =>
            of({}).pipe(
                timeout(0),
                map(() => new Less(action.payload))
            )
        )
    );

    constructor(private actions$: Actions) { }
}