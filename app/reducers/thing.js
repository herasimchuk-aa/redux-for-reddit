import { handleActions } from 'redux-actions'

const defaultState = {
	isPending: false,
	link: {},
	content: ''
}

export const thing = handleActions({
	['LOAD_THING_STARTED']: (state, action) => (Object.assign({}, state, {
		isPending: true,
		link: action.payload
	})),

	['LOAD_THING_COMPLETED']: (state, action) => (Object.assign({}, state, {
		isPending: false,
		content: action.payload
	})),


}, defaultState)