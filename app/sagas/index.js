import { fork }     from 'redux-saga/effects'

import authorize        from './authorize'
import fetchLinks       from './fetchLinks'
import fetchComments    from './fetchComments'
import selectLink       from './selectLink'
import updateFilter     from './updateFilter'
import vote             from './vote'
import fetchSubreddits  from './fetchSubreddits'

export default function* root(getState) {
    yield [
        fork(authorize),
        fork(fetchLinks),
        fork(selectLink),
        fork(fetchComments),
        fork(updateFilter),
        fork(vote),
        fork(fetchSubreddits)
    ]
}   