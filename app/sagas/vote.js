import { take, put, call, fork, select, apply } from 'redux-saga/effects'
import { takeEvery } 				 			from 'redux-saga'

import { voteUpCompleted,
		 voteDownCompleted, 
		 voteError }		from '../actions/links'
import { authRequired }		from '../actions/auth'
import { isUserAuthorized } from '../reducers/selectors'
import api 					from '../api/reddit/index'

function* vote(action, vote) {
	try {
		var test = yield select(isUserAuthorized)
				console.log(test)	
		if (yield select(isUserAuthorized)) {
			let id = action.payload
			yield apply(api.vote, vote, [id])
			return true
		}
		else {
			yield put(authRequired())
		}
	}
	catch(error) {
		yield put(voteError(error))
		console.log(error)		
	}

	return false
}

function* voteUp(action) {
 	let result = yield call(vote, action, api.vote.up)
 	if (result) {
 		yield put(voteUpCompleted(action.payload))
 	}
}

function* voteDown(action) {
 	let result = yield call(vote, action, api.vote.down)
 	if (result) {
		yield put(voteDownCompleted(action.payload))
 	}
}

export default function* root(state) {
	yield [ 
		takeEvery('VOTE_UP_STARTED', voteUp),
		takeEvery('VOTE_DOWN_STARTED', voteDown)
	]	
}