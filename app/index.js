import 'babel-polyfill'

import React           from 'react'
import { render }	   from 'react-dom'
import { Provider }	   from 'react-redux'
import { ReduxRouter } from 'redux-router'

import routes 		   from './routes'
import configureStore  from './store/configureStore'
import DevTools        from './containers/devTools'

const store = configureStore()

render(
	<Provider store={store}>
		<div>
			<ReduxRouter routes={routes} />
        	<DevTools />
      	</div>
	</Provider>,
	document.getElementById('app')
)
