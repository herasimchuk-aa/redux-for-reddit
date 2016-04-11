import { handleActions } from 'redux-actions'

const defaultState = {
	isPending: false,
	entities: {}
}

export const subreddits = handleActions({
	['LOAD_SUBREDDITS_STARTED']: (state, action) => (Object.assign({}, state, {
		isPending: true,
		entities: action.payload
	})),

	['LOAD_SUBREDDITS_COMPLETED']: (state, action) => (Object.assign({}, state, {
		isPending: false,
		entities: action.payload
	})),

}, defaultState)