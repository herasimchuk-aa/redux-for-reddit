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
            .then(this.normalize)
    }

    search(params) {
        let url = `/search`,        
            query = {
                q: params.query
            }

        return super
            .get(url, query)
            .then(this.normalize)
    }

    normalize(result) {
         return result.map(item => {
            if (item.kind === 't3' && item.data) {
                item.data.type = item.kind
                return item.data
            }
        })       
    }
}