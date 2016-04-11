import { take, put, call, fork,
		 cancel, apply, select } from 'redux-saga/effects'
import { takeEvery } 			 from 'redux-saga'

import { getLinkByName }		from '../reducers/selectors' 
import createValidParser 		from '../api/readability/index'
import * as actions				from '../actions/viewer'
import { loadCommentsStarted }	from '../actions/comments'
import api 						from '../api/reddit/index'

function* fetchLink(linkName) {
	yield put(actions.loadLinkStarted(linkName))		
	let result = yield apply(api.link, api.links.get, [{ linkName }])
	return result
}

function* parseLink(link) {	
	yield put(actions.parseLinkStarted(link))
	let parser = createValidParser(link)
	let content = yield apply(parser, parser.parse)
	yield put(actions.parseLinkCompleted(content))
}

function* selectLink(action) {
	try {
		//let link = yield select(getLinkByName, action.payload)		
		//if(!link) {
		//	link = yield call(fetchLink, action.payload)
		//}

		//yield put(actions.loadLinkCompleted(link))
		let link = action.payload
		yield call(parseLink, link)

		yield put(loadCommentsStarted({ subreddit: link.subreddit, id: link.id }))	
	}
	catch(error) {
		yield put(actions.parseLinkError(error))
		console.log(error)
	}
}

export default function* root() {
	yield* takeEvery('SELECT_LINK', selectLink)
}
