export function buildRoute(filter) {
    if (filter.type === 'front') {
        return `/${filter.sort}`
    } 
    else if (filter.type === 'subreddit') {
        return `/r/${filter.subreddit}/${filter.sort}`
    }
    else if (filter.type === 's') {
    	return `/s?q=${filter.value}`
    }
}