import Snoocore from 'snoocore'

import links 	from './links'

const modules = {
  links
}

class API {
	constructor() {
		const reddit = new Snoocore({
		    userAgent: 'redux-for-reddit',
		    oauth: {
		    	type: 'implicit',
		    	key: 'enmEpJObI3qUaQ',
		    	redirectUri: 'http://localhost:3000/auth.html',
		     	scope: [ 'identity', 'read', 'subscribe', 'modconfig', 'submit' ]
		    }
		})

	    for (let a in modules) {
      		this[a] = new modules[a](reddit);
    	}
	}
}

const a1 = new API()
export default a1