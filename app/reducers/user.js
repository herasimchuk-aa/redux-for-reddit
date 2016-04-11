import { handleActions } from 'redux-actions'

const defaultState = {
	IsAuthorized: false
}

export const user = handleActions({
	['SIGN_IN']: (state, action) => (Object.assign({}, state, {
		IsAuthorized: true
	})),

	['SIGN_OUT']: (state, action) => (Object.assign({}, state, {
		IsAuthorized: false
	})),


}, defaultState)