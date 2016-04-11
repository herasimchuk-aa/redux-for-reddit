export default class Imgur {
	constructor(thing) {
		this.thing = thing
		this.headers = new Headers()
		this.headers.append('Authorization', 'Client-ID 346b2e6b58db568')
	}


	getId(url) {
		let pattern = /https?:\/\/i?\.?imgur\.com\/(.*?)(\..*)?(?:[#\/].*|$)/

		let resultGroup = pattern.exec(url)		
		if (resultGroup && resultGroup.length > 0) {
			return resultGroup[1]
		}

		return null
	}

	parse() {
		var id = this.getId(this.thing.url)

		if (id) {
			return fetch(`https://api.imgur.com/3/image/${id}`, { headers: this.headers })
				.then((response) => {
					return response.json()
				})
				.then((response) => {
					return response.data
				})
				.then(data => {
					if (!data.animated) {
						return  {
							link: data.link,
							isImage: true
						}
					}
					else {
						return {
							link: data.mp4,
							isVideo: true
						}
					}
				})
		}

		return new Promise((resolve, reject) => {
			resolve(this.thing.url)
		})
	}

	static isMatch(thing) {
		//return false
		return thing.domain.includes('imgur.com')
	}
}