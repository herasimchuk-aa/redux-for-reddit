import Snoocore from 'snoocore'

export default class Base {
	constructor(reddit) {
		this.reddit = reddit
	}

	get types() {
		return {
			comments : 't1',
			users: 't2',
			links: 't3',
			messages: 't4',
			subreddits: 't5',
			trophies: 't6',
			promocampaigns: 't8'
		}
	}

	get(query, params) {
		return this.request('get', query, params)
	}

	request(method, query, params) {
		if (window.accessToken) {
			return reddit.auth(window.accessToken).then(() => {
				return reddit(query)[method](params)
			})
		}

		return reddit(query)[method](params)
			.then(result => {
				if (result.kind == 'Listing' && result.data && result.data.children) {
					return result.data.children
				}

				return result
			})
	}
}