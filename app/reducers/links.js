import { handleActions } from 'redux-actions'

const defaultState = {
    isPending: false,
    entities: [],
    page: 0
} 

export const links = handleActions({
    ['LOAD_LINKS_STARTED']: (state, action) => ({
        ...state,
        isPending: true
    }),

    ['REPLACE_LINKS']: (state, action) => ({
        ...state,
        isPending: false,
        entities: action.payload,
        page: 1
    }),

    ['MERGE_LINKS']: (state, action) => ({
        ...state,
        isPending: false,
        entities: state.entities.concat(action.payload),
        page: state.page++
    }), 

    ['LOAD_LINKS_ERROR']: (state, action) => ({
        ...state,
        isPending: false
    }),

    ['CLEAR_LINKS']: (state, action) => defaultState,

    ['VOTE_UP_COMPLETED']: (state, action) => ({
        ...state,
        entities: state.entities.map(link => link.name === action.payload ?
            { ...link, score: ++link.score, likes: true } :
            { ...link })
    }),

    ['VOTE_DOWN_COMPLETED']: (state, action) => ({
        ...state,
        entities: state.entities.map(link => link.name === action.payload ?
            { ...link, score: --link.score, likes: false } :
            { ...link })
    })  

}, defaultState)