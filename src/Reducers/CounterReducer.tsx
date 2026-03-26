
interface CounterState {
    counter: number;
    facultyCounter: number;
}

type CounterAction =
    | { type: "INCREMENT_COUNTER" }
    | { type: "INCREMENT_FACULTY" };

const initialState: CounterState = {
    counter: 0,
    facultyCounter: 0,
};

const counterReducer = (
    state: CounterState,
    action: CounterAction,
): CounterState => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter < 2500 ? state.counter + 25 : 2500,
            };
        case "INCREMENT_FACULTY":
            return {
                ...state,
                facultyCounter:
                    state.facultyCounter < 1200
                        ? state.facultyCounter + 12
                        : 1200,
            };
        default:
            return state;
    }
};

export { counterReducer, initialState };
export type { CounterState, CounterAction };
