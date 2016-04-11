import fetchJsonp from 'fetch-jsonp'

export default class ContentParser {
	isImage(url) {
		return (/\.(jpgv|gifv|gif|jpg|jpeg|tiff|png)$/i).test(url)
	}

	isTwitter(domain) {
		return domain.includes('twitter')
	}

	getTwitterContent(url) {
		return 'заглушка'
	}

	getReadabilityContent(url) {
		var token = 'e97c4f658162139ec8e04c4cbb2e80518c66757f'
		var apiUrl = `https://readability.com/api/content/v1/parser?url=${url}&token=${token}`

		return fetchJsonp(apiUrl)
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
	}

	getContent(thing) {
		if (thing.is_self) {
			return thing.selftext_html
		}
		else if (this.isImage(thing.url)) {
			return new Promise((resolve) => { resolve(thing.url) })
		}
		else if (this.isTwitter(thing.domain)) {
			return this.getTwitterContent(url)
		}
		else {
			return this.getReadabilityContent('')
		}

		return ''
	}
}