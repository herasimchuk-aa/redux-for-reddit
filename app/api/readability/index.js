import Twitter  from './twitter'
import Imgur    from './imgur'
import Basic    from './basic'
import Reddit   from './reddit'

// priority order
const parsers = {
    Reddit,
    Twitter,
    Imgur,
    Basic
}

export default function createValidParser(thing) {
    for(let parser in parsers) {
        if (parsers[parser].isMatch(thing)) {
            return new parsers[parser](thing) 
        }
    }

    return new Basic(parser)
}