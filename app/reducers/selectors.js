import _ from 'lodash'

export function getFilterOptions(state) {
    let routeName = _.last(state.router.routes).name,
        sort = state.router.params.sort || 'hot'

    if (routeName === 'front') {
        return {
            type: routeName,
            sort
        }
    }
    else if (routeName === 'subreddit') {
        let subreddit = state.router.params.subreddit || 'all'

        return {
            type: routeName,
            subreddit,
            sort
        }
    }
    else if (routeName === 'search') {
        return {
            type: routeName,
            query: state.router.params.query || '',
            sort
        }
    }

    return {
        type: 'none'
    }
}

export function getLinkByName(state, name) {
    return state
            .links
            .entities
            .filter(link => link.name == name)[0]
}

export function isUserAuthorized(state) {
    return state.auth.IsAuthorized
}
