import Snoocore from 'snoocore'

import links 	from './links'
import comments from './comments'
import user 	from './user'
import vote		from './vote'

const modules = {
  links,
  comments,
  user,
  vote
}

class API {
	constructor() {
		const reddit = new Snoocore({
		    userAgent: 'redux-for-reddit',
		    oauth: {
		    	type: 'implicit',
		    	key: 'enmEpJObI3qUaQ',
		    	redirectUri: 'http://localhost:3000/auth.html',
		     	scope: [ 'identity', 'read', 'subscribe', 'modconfig', 'submit', 'vote' ]
		    }
		})

	    for (let a in modules) {
      		this[a] = new modules[a](reddit);
    	}
	}
}

export default new API()