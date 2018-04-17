const initState = {
    following:{}
}
export default function folllowingReducers(state=initState, action){
    switch(action.type){
        case 'FOLLOWING':
        return{ ...state, following:action.payload.following}
        break;
        default:
        return{ ...state}
    }
}