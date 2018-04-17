const initState = {
    users: []
}
export default function userReducer(state=initState,action) {
    switch(action.type){
        case "SET_USERS":
            return {...state, users: action.payload.users}
            break;
        default: 
            return {...state}
    }
} 
