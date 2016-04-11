import Base from './base'


export default class Comments extends Base {
	constructor(reddit) {
		super(reddit)
	}

	get(params) {
		var thingName = params.id
		return super
			.get(`r/${params.subreddit}/comments/${thingName}`)
			.then(result => {				
				console.log(result)
				return result[1].data.children
			})
	}

	post(thingId, text) {
		return super
			.post('api/comment', {
				thing_id: thingId,
				text: text
			})
	}
}