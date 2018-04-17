const initState ={
    followers:{}
}
export default function followersReducers(state=initState,action){
    switch(action.type){
        case "FOLLOWERS":
        return {...state, followers:action.payload.followers}
        break;
        default:
        return {...state}
    }

}