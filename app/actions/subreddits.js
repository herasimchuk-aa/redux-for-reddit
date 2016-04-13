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