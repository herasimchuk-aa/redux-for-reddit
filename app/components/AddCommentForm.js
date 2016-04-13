import React, { Component } from 'react'

import '../../styles/content-viewer.css'

export default class AddCommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    submitComment() {
        this.props.submitComment(this.props.commentId, this.state.value)
    }

    handleChange(f, s) {
        this.setState({value: f.target.value})
    }

    render() {
        return (
            <div className="add-comment-form">
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />               
                <button onClick={this.submitComment.bind(this)}>Submit</button> 
            </div>
        )
    }
}