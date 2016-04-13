import { take, put, call, fork, cancel, apply } from 'redux-saga/effects'
import { takeEvery }                            from 'redux-saga'

import { mergeLinks,
         replaceLinks,
         loadLinksError }   from '../actions/links'
import { selectLink }       from '../actions/viewer'         
import api                  from '../api/reddit/index'

function* fetchLiks(action) {
    try {
        let params = action.payload,
            links = yield apply(api.links, api.links.get, [params])

        if (params.after) {
            yield put(mergeLinks(links))
        }
        else {
            yield put(replaceLinks(links))
            if (links.length > 0) {
                yield put(selectLink(links[0]))
            }
        }
    }
    catch(error) {
        yield put(loadLinksError(error))
        console.log(error)
    }
}

export default function* root() {
    yield* takeEvery('LOAD_LINKS_STARTED', fetchLiks)
}