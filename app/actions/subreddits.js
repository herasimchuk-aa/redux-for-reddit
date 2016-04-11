import { api } from '../api/api'

function loadSubredditsStarted() {
	return {
		type: 'LOAD_SUBREDDITS_STARTED'
	}
}

function loadSubredditsCompleted(result) {
	return {
		type: 'LOAD_SUBREDDITS_COMPLETED',
		payload: result
	}
}

export function fetchSubreddits () {
	return (dispatch, getState) => {
		dispatch(loadSubredditsStarted())
		return api.subreddits.get()
			.then((result) => dispatch(loadSubredditsCompleted(result)))
	}
}