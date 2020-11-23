
const defaultState = {
    user: null,
    loading: false,
    error: null,
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FIND_USER_LOADING": {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case "FIND_USER_ERROR": {
            return {
                ...state,
                ...action.data,
                loading: false
            }
        }
        case "FIND_USER_SUCCESS": {
            return {
                ...state,
                ...action.data,
                loading: false,
                error: null,
            }
        }
        default:
            return state
    }
}

export default UserReducer
