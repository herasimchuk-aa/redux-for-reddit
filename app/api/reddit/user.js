import Base from './base'

export default class User extends Base {
    constructor(reddit) {
        super(reddit)
        this.authUrl = reddit.getImplicitAuthUrl()
    }

    isAuth() {
        console.log('isAuth')   
        return super.authToken ? true : false
    }

    login(params) {
        const openDialog = (uri, name, options, closeCallback) => {
            let dialogWindow = window.open(uri, name, options)

            let interval = window.setInterval(() => {
                try {
                    if (dialogWindow == null || dialogWindow.closed) {
                        window.clearInterval(interval)
                        closeCallback(dialogWindow)
                    }
                }
                catch (e) {

                }
            }, 1000)

            return dialogWindow
        }

        const tryToGetToken = (resolve) => {
            openDialog(this.authUrl, '', 'width=500, height=500', (dialogWindow) => {           
                if (dialogWindow.accessToken) {
                    super.authToken = dialogWindow.accessToken
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            })
        }

        return new Promise(tryToGetToken)
    }

    logout() {
        super.authToken = ''
    }
}