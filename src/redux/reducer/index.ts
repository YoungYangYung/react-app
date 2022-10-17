const initState = {
    count: 10
}

export const countReducer = (state = initState, action)=>{
    switch(action.type) {
        case 'add':
            const { payload } = action;
            return {
                count: state.count + payload || 1
            }
        default:
            return state;
    }
} 