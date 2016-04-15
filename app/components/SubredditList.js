import React, { Component } from 'react'
import decode               from 'decode-html'
import _                    from 'lodash'
import Scroll               from 'react-scroll' 
import { Link }             from 'react-router'

import '../../styles/subreddit-list.css'

export default class SubredditList extends Component {
    componentDidUpdate() {
      window.scrollTo(0, 0)
    }

    loadNext() {
        let filter = {
            after: _.last(this.props.subreddits).name
        }   

        this.props.fetchSubreddits(filter)
    }

    loadPrev() {
        let filter = {
            before: _.first(this.props.subreddits).name
        }   

        this.props.fetchSubreddits(filter)
    }

    selectSubreddit(subreddit) {
        this.props.selectSubreddit(subreddit)
    }

    render() {
        if (this.props.isPending) {
            return (
                <div>Pending</div>
            )
        }

        let content = this.props.subreddits.map(subreddit => {
            return (
                <div className="subreddit-list-item" onClick={this.selectSubreddit.bind(this, subreddit)}>
                    <div className="subreddit-list-item__thumbnail">
                        <img src={subreddit.icon_img} className="small-thumbnail" />
                    </div>
                    <div className="subreddit-list-item__body">
                        <div className="subreddit-list-item__link">
                            {subreddit.header_title}
                        </div>
                        <div className="subreddit-list-item__description"
                             dangerouslySetInnerHTML={{ '__html': decode(subreddit.public_description || '') }}>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="subreddits">
                <div className="subreddit-list">
                    {content}
                </div>
                <div className="subreddits__nav_button">
                    <a onClick={this.loadPrev.bind(this)}>prev</a>
                    <a onClick={this.loadNext.bind(this)}>next</a>
                </div>
            </div>
        )
    }
}