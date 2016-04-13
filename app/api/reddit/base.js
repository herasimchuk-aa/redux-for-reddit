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

    get authToken() {
        return localStorage.getItem('authToken')
    }

    set authToken(value) {
        localStorage.setItem('authToken', value)
    }

    get(query, params) {
        return this.request('get', query, params)
    }

    post(query, params) {
        return this.request('post', query, params)
    }

    request(method, query, params) {
        const checkResult = (result) => {
            console.log(result)
            if (result.kind == 'Listing' && result.data && result.data.children) {
                return result.data.children
            }

            return result       
        }

        if (this.authToken) {
            return this.reddit.auth(this.authToken).then(() => {
                return reddit(query)[method](params).then(checkResult)
            })
        }

        return this.reddit(query)[method](params).then(checkResult)
    }
}