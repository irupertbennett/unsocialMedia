const initState = {
    authError: null
}

const postReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_POST':
            return {
                state
            }
        case 'CREATE_POST_ERROR':
            return {
                ...state
            }
        case 'UPDATE_POST':
            return {
                ...state
            }
        case 'UPDATE_POST_ERROR':
            return {
                ...state
            }
        case 'DELETE_POST':
            return {
                state
            }
        case 'DELETE_POST_ERROR':
            return {
                ...state
            }
        default:
            return {
                ...state,
                authError: null
            }
    }
}

export default postReducer