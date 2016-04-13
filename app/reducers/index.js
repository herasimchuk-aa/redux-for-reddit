import { combineReducers }      from 'redux'
import { routerStateReducer }   from 'redux-router'

import { auth }         from './auth'
import { links }        from './links'
import { viewer }       from './viewer'
import { comments }     from './comments'
import { subreddits }   from './subreddits'

const rootReducer = combineReducers({
    router: routerStateReducer,
    links,
    comments, 
    subreddits,
    auth,
    viewer
})

export default rootReducer