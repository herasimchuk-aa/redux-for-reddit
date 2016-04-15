import { handleActions } from 'redux-actions'

const defaultState = {
    isPending: false,
    entities: [],
    page: 0
}

export const subreddits = handleActions({
    ['LOAD_SUBREDDITS_STARTED']: (state, action) => ({
        ...state,
        isPending: true
    }),

    ['LOAD_SUBREDDITS_COMPLETED']: (state, action) => ({
        ...state,
        isPending: false,
        entities: action.payload
    }),

}, defaultState)