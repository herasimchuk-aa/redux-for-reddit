import { take, put, call, fork, cancel, apply } from 'redux-saga/effects'
import { takeEvery }                            from 'redux-saga'
import { pushState }                            from 'redux-router'

import { clearLinks }   from '../actions/links'
import { updateFilter } from '../actions/filter'
import { buildRoute }   from '../utils/routes'

function* updateFilterOptions(action) {
    try {
        let filter = action.payload
        yield put(clearLinks())
        yield put(pushState(null, buildRoute(filter)))
    }
    catch(error) {
        // yield put(updateFilter(error))
    }
}

export default function* root() {
    yield* takeEvery('UPDATE_FILTER', updateFilterOptions)
}