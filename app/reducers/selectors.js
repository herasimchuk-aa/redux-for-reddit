import _ from 'lodash'

export function getFilterOptions(state) {
	let routeName = _.last(state.router.routes).name

	if (routeName === 'front') {
		let sort = state.router.params.sort || 'hot'

		return {
			type: routeName,
			sort
		}
	}
	else if (routeName === 'subreddit') {
		let subreddit = state.router.params.subreddit || 'all'
		let sort = state.router.params.sort || 'hot'

		return {
			type: routeName,
			subreddit,
			sort
		}
	}

	return {
		type: 'none'
	}
}

export function getLinkByName(state, name) {
	return state
			.links
			.entities
			.filter(link => link.name == name)[0]
}

export function isUserAuthorized(state) {
	return state.auth.IsAuthorized
}