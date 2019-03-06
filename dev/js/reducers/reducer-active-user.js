export default function (state=null, action) {
    // ES6 state=null so when app first boots up, no user is selected

    switch(action.type){
        case "USER_SELECTED":
            return action.payload; // Returning payload/data
    }
    return state;
}