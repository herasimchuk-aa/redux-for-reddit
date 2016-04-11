import { handleActions } from 'redux-actions'

const defaultState = {
	isPending: false,
	link: {},
	content: {}
}

export const viewer = handleActions({
	['SELECT_LINK']: (state, action) => ({
		...state,
		link: action.payload
	}),

	['PARSE_LINK_STARTED']: (state, action) => ({
		...state,
		isPending: true
	}),

	['PARSE_LINK_COMPLETED']: (state, action) => ({
		...state,
		content: action.payload,
		isPending: false
	}),	

	['PARSE_LINK_ERROR']: (state, action) => ({
		...state,
		isPending: false
	}),		

	['VOTE_UP_COMPLETED']: (state, action) => ({
		...state,
		link: {
			...state.link,
			score: state.link.score,
			likes: true
		}
	}),

	['VOTE_DOWN_COMPLETED']: (state, action) => ({
		...state,
		link: {
			...state.link,
			score: state.link.score,
			likes: false
		}
	})	

}, defaultState)