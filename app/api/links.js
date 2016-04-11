import Base from './base'

export default class Links extends Base {
	constructor(reddit) {
		super(reddit)
	}

	get(params) {
		let p = {
			after: 't3_' + params.after
		}

		return super
			.get(`r/${params.subreddit}/${params.filter}`, p)
			.then(result => {
				return result.map(item => {
					if (item.kind == this.types.links && item.data) {
						item.data.type = this.types.links
						return item.data
					}
				})
			})
	}
}