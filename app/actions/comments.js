export function loadCommentsStarted(linkName) {
    return {
        type: 'LOAD_COMMENTS_STARTED',
        payload: linkName
    }
}

export function loadCommentsCompleted(result) {
    return {
        type: 'LOAD_COMMENTS_COMPLETED',
        payload: result
    }
}

export function loadCommentsError(error) {
    return {
        type: 'LOAD_COMMENTS_ERROR',
        payload: error
    }
}

export function  submitCommentCompleted(result) {
    return {
        type: 'SUBMIT_COMMENT_COMPLETED',
        payload: result
    }
}