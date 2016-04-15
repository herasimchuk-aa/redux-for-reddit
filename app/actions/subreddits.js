export function loadSubredditsStarted(params) {
    return {
        type: 'LOAD_SUBREDDITS_STARTED',
        payload: params
    }
}

export function loadSubredditsCompleted(result) {
    return {
        type: 'LOAD_SUBREDDITS_COMPLETED',
        payload: result
    }
}

export function loadSubredditsError(error) {
    return {
        type: 'LOAD_SUBREDDITS_ERROR',
        payload: error
    }
}

export function selectSubreddit(subreddit) {
	return {
		type: 'SELECT_SUBREDDIT',
		payload: subreddit
	}
}