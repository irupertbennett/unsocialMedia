const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                state,
                authError: 'If this is your first time logging in then please refresh the page'
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed!'
            }
        case 'SIGNOUT_SUCCESS':
            return {
                state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: 'Success! A verification email has been sent to you. Please follow the instructions there.'
            }
        case 'SIGNUP_ERROR':
            return{
                ...state,
                authError: action.error.message
            }
            case 'VALIDATE_EMAIL':
                return {
                    ...state,
                    authError: 'Thank you for signing up! An email has be sent to your account, please follow the instructions there.'
                }
            case 'VERIFY_EMAIL':
                return {
                    ...state,
                    authError: 'You have not yet verified your email address - a new verification email has been sent to you.'
                }
            case 'RESET_EMAIL_SUCCESS':
                return {
                    ...state,
                    authError: 'Thank you - A password reset email has been sent.'
                }
            case 'RESET_EMAIL_ERROR':
                return {
                    ...state,
                    authError: action.err.message
                }
            case 'CREATE_EMAIL_ERROR':
                return {
                    ...state,
                    authError: action.err.message
                }
            case 'VALIDATE_EMAIL_ERROR':
                return {
                    ...state,
                    authError: action.err.message
                }
            case 'UPDATE_USER_ERROR':
                return {
                    ...state
                }
            case 'UPDATE_USER':
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

export default authReducer