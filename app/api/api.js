import fetchJsonp from 'fetch-jsonp'

import Snoocore from 'snoocore'


let api = {}

var reddit = new Snoocore({
    userAgent: 'Snoocore-examples@oauth-implicit',
    oauth: {
    	type: 'implicit',
    	key: 'enmEpJObI3qUaQ',
    	redirectUri: 'http://localhost:3000/auth.html',
     	scope: [ 'identity', 'read', 'subscribe', 'modconfig', 'submit' ]
    }
})

window.reddit = reddit

console.log(reddit.getImplicitAuthUrl())

api.accessToken = ''

api.auth = {
	login: function() {
		var url = reddit.getImplicitAuthUrl(); 

		var openDialog = function(uri, name, options, closeCallback) {
		    var win = window.open(uri, name, options);
		    var interval = window.setInterval(function() {
		        try {
		            if (win == null || win.closed) {
		                window.clearInterval(interval);
		                closeCallback(win);
		            }
		        }
		        catch (e) {
		        }
		    }, 1000);
		    return win;
		};

		const tryToGetToken = (resolve) => {
			openDialog(url, '', 'width=500, height=500', (win) => {			
				console.log(win.accessToken)
				if (win.accessToken) {
					api.accessToken = win.accessToken
					window.accessToken = win.accessToken
					console.log(api.accessToken)
					resolve(true)
				}
				else {
					resolve(false)
				}
			})
		}

		return new Promise(tryToGetToken)
	}
}

var match = ('' + window.location.hash).match(/access_token=(.*?)&/);
var accessToken = match ? match[1] : '';

console.log('token' + accessToken)

api.comments = {
	get: (selector) => {
		return reddit('/r/test/comments/4art92').get()
			.then(data => {
				console.log('tet')
				console.log(data)
				return data[1].data.children
			})
	},
	post: (thingId, text) => {
		reddit.auth(api.accessToken).then(() => {
			var t = reddit('/api/comment').post({
				thing_id: thingId,
				text: text
			})
				console.log(t)
		})
	}
}

api.links = {
	get: (filter, subreddit) => {

		return fetch(`https://www.reddit.com/r/${subreddit}/${filter}.json`)
			.then(checkStatus)
			.then(parseJSON)
			.then(data => {
				return data.data.children.map(item => {
					item.data.kind = item.kind
					return item.data
				})
			})
	}
}

api.subreddits = {
	get: (selector) => {
		return reddit('/subreddits/new').get()
			.then(result => {
				console.log(result)
				return result.data
			})
	}
}

api.content = {
	get: (selector) => {
		var str = 'https://readability.com/api/content/v1/parser?url=http%3A%2F%2Fwww.theguardian.com%2Fworld%2F2016%2Fmar%2F04%2Fun-received-99-sexual-assault-complaints-against-its-staff-in-2015&token=e97c4f658162139ec8e04c4cbb2e80518c66757f'
		return fetchJsonp(str)
			.then(checkStatus)
			.then(parseJSON)
			.then(data => {
				return data
			})
	}
}

api.thing = {
	get: (url) => {
		var str = `https://readability.com/api/content/v1/parser?url=${url.url}&token=e97c4f658162139ec8e04c4cbb2e80518c66757f`
		return fetchJsonp(str)
			.then(checkStatus)
			.then(parseJSON)
			.then(data => {
				console.log(data)
				return data
			})		
	}
}

// api.subreddits = {
// 	get: (query) => {
// 		var url = `https://www.reddit.com/subreddits/search?q=${query}.json`
// 		return fetch(url)
// 			.then(checkStatus)
// 			.then(parseJSON)
// 			.then(data => {
// 				return data
// 			})		
// 	}
// }

export {
	api
}

function checkStatus(response) {
	console.log(response)
	if (response.ok || (response.status >= 200 && response.status < 300)) {
		return response
  	} else {
    	var error = new Error(response.statusText)
    	error.response = response
    	throw error
  	}
}

function parseJSON(response) {
	return response.json()
}