export function loginStarted() {
    return {
        type: 'LOGIN_STARTED'
    }
}

export function loginCompleted() {
    return {
        type: 'LOGIN_COMPLETED'
    }
}

export function loginError(error) {
    return {
        type: 'LOGIN_ERROR',
        payload: error
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function authRequired() {
    return {
        type: 'AUTH_REQUIRED'
    }
}