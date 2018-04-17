const initState = {
    repos: {}
}
export default function reposReducers(state=initState,action) {
    switch(action.type){
        case "SET_REPOS":
            return {...state, repos: action.payload.repos}
            break;
        default: 
            return {...state}
    }
} 