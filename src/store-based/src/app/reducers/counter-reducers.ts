import { CounterActions, CounterActionTypes } from './../actions/counter-actions';

export interface State {
    0: number;
    1: number;
    2: number;
    total: number;
}

export const initialState: State = {
    0: 0,
    1: 0,
    2: 0,
    total: 0,
};

export function reducer(state = initialState, action: CounterActions): State {
    switch (action.type) {
        case CounterActionTypes.More: {
            return {
                ...state,
                [action.payload.id]: state[action.payload.id] + 1,
                total: state.total + 1
            };
        }

        case CounterActionTypes.Less: {
            return {
                ...state,
                [action.payload.id]: state[action.payload.id] - 1,
                total: state.total - 1
            };
        }

        default: {
            return state;
        }
    }
}