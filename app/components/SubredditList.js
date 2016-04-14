import React, { Component } from 'react'

import '../../styles/subreddits.css'

export default class SubredditList extends Component {
    render() {
        let subreddits = this.props.subreddits

        let content
        if (subreddits) {
            content = subreddits.map(subreddit => {
                return (
                    <div>{subreddit.url}</div>
                )
            })
        }

        return (
            <div className="subreddits">
                {content}
            </div>
        )
    }
}