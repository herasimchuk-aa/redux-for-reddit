import Base from './base'

export default class Links extends Base {
	constructor(reddit) {
		super(reddit)
	}

	get(params) {
		let url = params.subreddit ? 
			`r/${params.subreddit}/${params.sort}` :
			`/${params.sort}`

		let query = {
		 	after: params.after
		}

		return super
			.get(url, query)
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