import { take, put, call, fork, cancel, apply } from 'redux-saga/effects'
import { takeEvery }                            from 'redux-saga'

import { loadSubredditsStarted,
         loadSubredditsCompleted,
         loadSubredditsError }   from '../actions/subreddits'
import api                  from '../api/reddit/index'

function* fetchSubreddits(action) {
    try {
        let params = action.payload,
            subreddits = yield apply(api.subreddits, api.subreddits.get, [params])
            
        yield put(loadSubredditsCompleted(subreddits))
    }
    catch(error) {
        yield put(loadSubredditsError(error.toString()))
        console.log(error)
    }
}

export default function* root() {
    yield* takeEvery('LOAD_SUBREDDITS_STARTED', fetchSubreddits)
}   