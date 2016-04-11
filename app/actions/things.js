import createValidParser from '../api/readability/index'	
import { pushState, replaceState }	from 'redux-router'

function setThing(thing) {
	return {
		type: 'SET_THING',
		payload: thing
	}
}

function loadThingStarted(link) {
	return {
		type: 'LOAD_THING_STARTED',
		payload: link
	}
}

function loadThingCompleted(result) {
	return {
		type: 'LOAD_THING_COMPLETED',
		payload: result
	}
}

function loadThingFailed() {
	return {
		type: 'LOAD_THING_FAILED'
	}
}

function buildNavigationUrl(params) {
	let url = '/r'

	if (params.subreddit) {
		url += `/${params.subreddit}`
		if (params.filter) {
			url += `/${params.filter}`
			if (params.thing) {
				url += `/${params.thing}`
			}
		}
	}

	return url
}

export function changeThing(value) {
	return (dispatch, getState) => {
		let params = getState().router.params
	    params = Object.assign({}, params, {
  			thing: value
    	});

	    console.log(buildNavigationUrl(params))
	    return dispatch(pushState(null, buildNavigationUrl(params)))
	}
}


export function selectThing(link) {
	return async (dispatch, getState) => {
		dispatch(changeThing(link.id))
		dispatch(loadThingStarted(link))

		let parser = createValidParser(link)
		var content = await parser.parse();

		return dispatch(loadThingCompleted(content))


		//return parser.getContent(link)
		//	.then(
		//		(result) => dispatch(loadThingCompleted(content)),
		//		(error) => dispatch(loadThingFailed())
		//	)		
	}
}

export function fetchThingIfNeeded() {
	return async (dispatch, getState) => {
		const thingName = getState().router.params.thing

		let link = getState()
			.links
			.entities
			.filter(l => l.name == thingName)[0]

		if (!link) {

		}
		if (link) {

			dispatch(loadThingStarted(link))

			let parser = createValidParser(link)
			var content = await parser.parse();

			return dispatch(loadThingCompleted(content))
		}
	}
}