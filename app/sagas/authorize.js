import { take, put, call, fork, cancel, apply } from 'redux-saga/effects'
import { isCancelError }                        from 'redux-saga'

import * as authAction  from '../actions/auth'
import api              from '../api/reddit/index'

function* authorize() {
    try {
        let isAuth = api.user.isAuth()
        if (isAuth) {
            yield put(authAction.loginCompleted())
        }
        else {
            let result = yield apply(api.user, api.user.login)
            if(result) {
                yield put(authAction.loginCompleted())
            }
            else {
                yield put(authAction.loginError('error'))
            }
        }
    }
    catch(error) {
        if(!isCancelError(error)) {
            yield put(authAction.loginError(error))
        }

        console.log(error)
    }
}

function* loginFlow() {
    while(true) {
        yield take('LOGIN_STARTED')
        let task = yield call(authorize)

        let action = yield take('LOGOUT', 'LOGIN_ERROR')
        if (action.type === 'LOGOUT') {
            yield cancel(task)
        }

        yield apply(api.user, api.user.logout)
    }
}

export default function* root() {
    yield fork(loginFlow)

    let isAuth = api.user.isAuth()
    if(isAuth) {
        yield put(authAction.loginStarted())
    }
}