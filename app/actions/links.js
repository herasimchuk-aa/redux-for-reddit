export function loadLinksStarted(params) {
 	return {
 		type: 'LOAD_LINKS_STARTED',
 		payload: params
 	}
}

export function loadLinksError(error) {
	return {
		type: 'LOAD_LINKS_ERROR',
		payload: error
	}
}

export function replaceLinks(links) {
	return {
		type: 'REPLACE_LINKS',
		payload: links
	}
}

export function mergeLinks(links) {
	return {
		type: 'MERGE_LINKS',
		payload: links
	}
}

export function clearLinks() {
	return {
		type: 'CLEAR_LINKS'
	}
}

export function voteUpStarted(id) {
	return {
		type: 'VOTE_UP_STARTED',
		payload: id
	}
}

export function voteUpCompleted(id) {
	return {
		type: 'VOTE_UP_COMPLETED',
		payload: id
	}
}

export function voteDownStarted(id) {
	return {
		type: 'VOTE_DOWN_STARTED',
		payload: id
	}
}

export function voteDownCompleted(id) {
	return {
		type: 'VOTE_DOWN_COMPLETED',
		payload: id
	}
}

export function voteError(error) {
	return { 
		type: 'VOTE_ERROR',
		payload: error
	}
}