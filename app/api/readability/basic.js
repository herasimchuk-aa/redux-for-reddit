import fetchJsonp from 'fetch-jsonp'

export default class Basic {
    constructor(thing) {
        this.thing = thing
    }

    parse() {
        const resourceUrl = this.thing.url,
              token = 'e97c4f658162139ec8e04c4cbb2e80518c66757f'
        return fetchJsonp(`https://readability.com/api/content/v1/parser?url=${resourceUrl}&token=${token}`)
            .then((response) => {
                return response.json()
            })
            .then(data => {
                return {
                    body: data.content,
                    IsHtml: true
                }
            })
    }

    static isMatch(thing) {
        return true
    }
}