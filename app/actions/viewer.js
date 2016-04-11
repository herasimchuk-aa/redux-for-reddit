export function selectLink(linkName) {
	return {
		type: 'SELECT_LINK',
		payload: linkName
	}
}

export function loadLinkStarted(linkName) {
	return {
		type: 'LOAD_LINK_STARTED',
		payload: linkName
	}
}

export function loadLinkCompleted(link) {
	return {
		type: 'LOAD_LINK_COMPLETED',
		payload: link
	}
}

export function loadLinkError(error) {
	return {
		type: 'LOAD_LINK_ERROR',
		payload: error
	}
}

export function parseLinkStarted(link) {
	return {
		type: 'PARSE_LINK_STARTED',
		payload: link
	}
}

export function parseLinkCompleted(parsedContent) {
	return {
		type: 'PARSE_LINK_COMPLETED',
		payload: parsedContent
	}
}

export function parseLinkError(error) {
	return {
		type: 'PARSE_LINK_ERROR',
		payload: error
	}
}