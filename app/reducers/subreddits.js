import { handleActions } from 'redux-actions'

const defaultState = {
    isPending: false,
    entities: [],
    page: 0
}

export const subreddits = handleActions({
    ['LOAD_SUBREDDITS_STARTED']: (state, action) => ({
        ...state,
        isPending: true,
        entities: action.payload
    }),

    ['LOAD_SUBREDDITS_COMPLETED']: (state, action) => ({
        ...state,
        isPending: false,
        entities: action.payload,
        page: ++state.page
    }),

}, defaultState)