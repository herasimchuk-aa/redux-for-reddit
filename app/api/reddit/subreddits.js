import Base from './base'

export default class Subreddits extends Base {
    constructor(reddit) {
        super(reddit)
    }

    get(params) {
        let url = '/subreddits/popular' 
        let query

        return super
            .get(url, query)
            .then(result => {
                return result.map(item => {
                    if (item.kind == this.types.subreddits && item.data) {
                        item.data.type = this.types.subreddits
                        return item.data
                    }
                })
            })
    }
}	