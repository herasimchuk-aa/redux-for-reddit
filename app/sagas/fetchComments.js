import { take, put, call, fork, cancel, apply } from 'redux-saga/effects'
import { takeEvery }                            from 'redux-saga'

import { loadCommentsCompleted,
		 loadCommentsError }     from '../actions/comments'
import api              		 from '../api/reddit/index'

function* fetchComments(action) {
    try {
        let params = action.payload
        let comments = yield apply(api.comments, api.comments.get, [params])
        yield put(actions.loadCommentsCompleted(comments))
    }
    catch(error) {
        yield put(actions.loadCommentsError(error))
    }
}

export default function* root() {
    yield* takeEvery('LOAD_COMMENTS_STARTED', fetchComments)
}