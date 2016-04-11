import api from '../api/reddit/index'

function signIn() {
	return {
		type: 'SIGN_IN'
	}
}

function signOut() {
	return {
		type: 'SIGN_OUT'
	}
}

export function auth() {
	return (dispatch, getState) => {
		api.user.login().then((result) => {
			if (result === true) {
				dispatch(signIn())
			}
		})
	}
}

export function checkAuth() {
	return (dispatch, getState) => {
		if (api.user.isAuth()) {
			dispatch(signIn())
		}	
	}
}

export function logInStarted() {
	return {
		type: 'LOGIN_STARTED'
	}
}

export function logInCompleted() {
	return {
		type: 'LOGIN_COMPLETED'
	}
}

export function logInError(error) {
	return {
		type: 'LOGIN_ERROR',
		payload: error
	}
}

export function logOut() {
	return {
		type: 'LOGOUT'
	}
}