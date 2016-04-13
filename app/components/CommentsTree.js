import React, { Component } from 'react'

import Comment              from './Comment'
import Vote                 from './Vote'

import '../../styles/comments-tree.css'

export default class CommentsTree extends Component {
    renderTree(commentHead) {
        let replies
        if (commentHead.data.replies) {
            replies = commentHead.data.replies.data.children.map(comment => {
                return this.renderTree(comment)
            })
        }

        if (commentHead.kind === 'more') {
            return (
                <div className="comments-tree__branch">
                    <div className="comments-tree__load-more">
                        load more comments
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="comments-tree__branch">
                    <Comment comment={commentHead} submitComment={this.props.submitComment} />
                    {replies}
                </div>
            )   
        }   
    }

    render() {
        let comments = this.props.comments.map(comment => {
            return this.renderTree(comment)
        })

        return (
            <div className="comments-tree">
                {comments}
            </div>
        )
    }
}