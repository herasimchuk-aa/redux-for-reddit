import { handleActions } from 'redux-actions'

const defaultState = {
    isPending: false,
    entities: []
} 

export const comments = handleActions({
    ['LOAD_COMMENTS_STARTED']: (state, action) => ({
        ...state,
        isPending: true
    }),

    ['LOAD_COMMENTS_COMPLETED']: (state, action) => ({
        ...state,
        isPending: false,
        entities: action.payload
    }),

    ['LOAD_COMMENTS_ERROR']: (state, action) => ({
        ...state,
        isPending: false,
        entities: action.payload
    }),

}, defaultState)