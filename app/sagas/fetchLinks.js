import { take, put, call, fork, cancel, apply } from 'redux-saga/effects'
import { takeEvery } 				 			from 'redux-saga'

import * as linksActions	from '../actions/links'
import api 					from '../api/reddit/index'

function* fetchLiks(action) {
	try {
		let params = action.payload
		let links = []

		//if (params.type === 'subreddit') {
			links = yield apply(api.links, api.links.get, [params])
		//}

		if (params.after) {
			yield put(linksActions.mergeLinks(links))
		}
		else {
			yield put(linksActions.replaceLinks(links))
		}
	}
	catch(error) {
		yield put(linksActions.loadLinksError(error))
		console.log(error)
	}
}

export default function* root() {
	yield* takeEvery('LOAD_LINKS_STARTED', fetchLiks)
}