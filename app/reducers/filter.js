import { handleActions } from 'redux-actions'

import * as actions 	 from '../constants/actions'

const defaultState = {
 	sort: 'hot',
 	subreddit: 'all'
}

export const filter = handleActions({
	['UPDATE_SORT']: (state, action) => (Object.assign({}, state, {
		sort: action.payload
	}))

}, defaultState)
