import { take, put, call, fork,
         cancel, apply, select } from 'redux-saga/effects'
import { takeEvery }             from 'redux-saga'

import createValidParser        from '../api/readability/index'
import { getLinkByName }        from '../reducers/selectors' 
import { parseLinkStarted,
         parseLinkCompleted,
         parseLinkError }       from '../actions/viewer'
import { loadCommentsStarted }  from '../actions/comments'
import api                      from '../api/reddit/index'

function* parseLink(link) { 
    yield put(parseLinkStarted(link))

    let parser = createValidParser(link)
    let content = yield apply(parser, parser.parse)
    
    yield put(parseLinkCompleted(content))
}

function* selectLink(action) {
    try {
        let link = action.payload
        yield call(parseLink, link)
        yield put(loadCommentsStarted({ subreddit: link.subreddit, id: link.id }))  
    }
    catch(error) {
        yield put(parseLinkError(error))
    }
}

export default function* root() {
    yield* takeEvery('SELECT_LINK', selectLink)
}
    