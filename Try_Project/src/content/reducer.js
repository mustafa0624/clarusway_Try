function reducer(state, action) {
    switch (action.type) {
        case "ARTTIR":
            state.counter = state.counter + 1
            return { ...state }
        case "AZALT":
            state.counter = state.counter - 1

        default:
            return state;
    }
}

export {reducer}