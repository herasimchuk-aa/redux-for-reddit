export function loadSubredditsStarted() {
    return {
        type: 'LOAD_SUBREDDITS_STARTED'
    }
}

export function loadSubredditsCompleted(result) {
    return {
        type: 'LOAD_SUBREDDITS_COMPLETED',
        payload: result
    }
}

export function loadSubredditsError(result) {
    return {
        type: 'LOAD_SUBREDDITS_ERROR',
        payload: result
    }
}