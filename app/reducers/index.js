import { combineReducers } 		from 'redux'
import { routerStateReducer }	from 'redux-router'

import { auth }			from './auth'
import { links }		from './links'
import { viewer }		from './viewer'

import { thing }		from './thing'
import { filter }		from './filter'
import { comments } 	from './comments'
import { user }			from './user'
import { subreddits }	from './subreddits'

const rootReducer = combineReducers({
	router: routerStateReducer,
	links,
	thing,
	filter,
	comments, 
	user,
	subreddits,
	auth,
	viewer
})

export default rootReducer