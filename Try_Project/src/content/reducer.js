function reducer(state, action) {
    switch (action.type) {
        case "Arttir":
            state.counter = state.counter + 1
            return { ...state };

        case "Azalt":
            state.counter = state.counter - 1;
            return{...state};

        case "isimDegistir":
            state.Name = action.payload.myNewName    

        default:
            return state    
    }
}

export default reducer