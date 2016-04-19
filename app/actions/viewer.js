export function selectLink(linkName) {
    return {
        type: 'SELECT_LINK',
        payload: linkName
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