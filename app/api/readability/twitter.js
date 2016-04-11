import fetchJsonp from 'fetch-jsonp'

export default class Twitter {
	constructor(thing) {
		this.thing = thing
	}

	parse() {
		const  tweetURL = this.thing.url
		return fetchJsonp(`https://api.twitter.com/1/statuses/oembed.json?url=${tweetURL}`)
			.then((response) => {
				return response.json()
			})
			.then((result) => {
				return {
					body: result.html,
					isHtml: true
				} 
			})
			.catch((ex) => {
				console.log(ex)
				return 'error'
			})
	}

	static isMatch(thing) {
		return thing.domain.includes('twitter.com')
	}
}