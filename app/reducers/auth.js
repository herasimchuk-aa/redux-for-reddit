import { handleActions } from 'redux-actions'

const defaultState = {
    IsAuthorized: false
}

export const auth = handleActions({
    ['LOGIN_COMPLETED']: (state, action) => ({
        ...state,
        IsAuthorized: true,
    }),

    ['LOGOUT']: (state, action) => ({
        ...state,
        IsAuthorized: false
    }),

}, defaultState)