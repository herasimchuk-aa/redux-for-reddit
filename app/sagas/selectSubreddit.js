import { take, put, call, fork,
         cancel, apply, select } from 'redux-saga/effects'
import { takeEvery }             from 'redux-saga'
import { pushState }             from 'redux-router'

import { clearLinks }   from '../actions/links'
import { buildRoute }   from '../utils/routes'


function* selectSubreddit(action) {
    yield put(clearLinks())

    let subreddit = action.payload
    let filter = {
        type: 'subreddit',
        sort: 'hot',
        subreddit: subreddit.display_name
    }

    yield put(pushState(null, buildRoute(filter)))        
}

export default function* root() {
    yield* takeEvery('SELECT_SUBREDDIT', selectSubreddit)
}