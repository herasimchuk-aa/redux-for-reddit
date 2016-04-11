import Base from './base'

export default class Vote extends Base {
	constructor(reddit) {
		super(reddit)
	}

	up(id) {
		return super
			.post('/api/vote', {
				id: id,
				dir: 1				
			})
	}

	down(id) {
		return super
			.post('/api/vote', {
				id: id,
				dir: -1
			})
	}
}