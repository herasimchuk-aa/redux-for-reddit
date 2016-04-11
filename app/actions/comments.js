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

// export function fetchComments(subreddit, thing) {
// 	return 	(dispatch, getState) => {
// 		dispatch(loadCommentsStarted({ thing, subreddit }))
// 		return api.comments.get({ subreddit, thing })
// 			.then(
// 				(result) => dispatch(loadCommentsCompleted(result)),
// 				(error) => dispatch(loadCommentsFailed())
// 			)
// 	}
// }

// export function submitComment(thingId, text) {
// 	return (dispatch, getState) => {
// 	const thingName = getState().router.params.thing
// 	const subredditName = getState().router.params.subreddit

// 		return api.comments.post(thingId, text)
// 				.then(
// 					(result) => dispatch(submitCommentCompleted(result))
// 				)
// 	}
// }
