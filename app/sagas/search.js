import { take, put, call, fork,
         cancel, apply, select } from 'redux-saga/effects'
import { takeEvery }             from 'redux-saga'
import { pushState }             from 'redux-router'

import { clearLinks }   from '../actions/links'
import { buildRoute }   from '../utils/routes'

function* search(action) {
    yield put(clearLinks())

    let filter = {
        type: 's',
        value: action.payload
    }   
    yield put(pushState(null, buildRoute(filter)))    
}

export default function* root() {
    yield* takeEvery('SEARCH', search)
}
    