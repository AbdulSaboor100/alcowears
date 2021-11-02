export let data = {
    currentUser: {},
    authUser :{},

}

export function reducer(state, action) {
    switch (action.type) {
        case "CURRENT_USER": {
            return {
                ...state,
                currentUser: action.payload
            }
        }

        case "AUTH_USER_DETAILS": {
 
            return {
                ...state,
                authUser : action.payload
            }
        }
     
        
        default:
            return state;

    }
}