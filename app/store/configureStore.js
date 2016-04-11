import { createStore,
		 compose,
		 applyMiddleware }		from 'redux'
import { reduxReactRouter } 	from 'redux-router'
import { createHistory } 		from 'history'
import createSagaMiddleware 	from 'redux-saga'
import thunk					from 'redux-thunk'

import sagas					from '../sagas/index'
import DevTools 				from '../containers/DevTools'
import rootReducer				from '../reducers/index'

const finalCreateStore = compose(
	applyMiddleware(thunk, createSagaMiddleware(sagas)),
	reduxReactRouter({ createHistory }),
	DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
	const store = finalCreateStore(rootReducer, initialState)
	return store
}