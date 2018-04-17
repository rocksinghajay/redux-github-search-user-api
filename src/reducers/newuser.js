const initState = {
    newusers: {}
}
export default function newuserReducer(state=initState,action) {
    switch(action.type){
        case "SET_NEWUSERS":
            return {...state, newusers: action.payload.newusers}
            break;
        default: 
            return {...state}
    }
} 