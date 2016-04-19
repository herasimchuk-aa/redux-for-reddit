export default class Reddit {
    constructor(thing) {
        this.thing = thing
    }

    parse() {
        return new Promise((resolve) => {
            resolve({
                body: this.thing.selftext_html || '',
                isSelf: true
            })
        })
    }

    static isMatch(thing) {
        return thing.is_self
    }
}