import React, { Component } from 'react'

import '../../styles/subreddits.css'

export default class Subreddits extends Component {
    render() {
        let subreddits = this.props.subreddits

        let content
        if (subreddits && subreddits.children) {
            content = subreddits.children.map(subreddit => {
                return (
                    <div>{subreddit.data.url}</div>
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