import React, { Component } from 'react'

import Vote 				from './Vote'
import AddCommentForm		from './AddCommentForm'

import '../../styles/content-viewer.css'

export default class Comment extends Component {
	constructor(props) {
		super(props)
		this.state = { isSelected: false }
	}

	selectComment() {
		this.setState({isSelected: true})
	}

	render() {
		let comment = this.props.comment
		let addForm

		if (this.state.isSelected) {
			addForm = (
				<AddCommentForm commentId={comment.data.name} submitComment={this.props.submitComment} />
			)
		}

		return (
			<div className="comment">
				<div className="comment__vote-container">
				
				</div>
				<div className="comment__content-container">	
					<div className="comment__tagline">
						<span>{comment.data.author}</span>
					</div>
					<div className="comment__body">
						{comment.data.body}
					</div>
					<div className="comment__buttons">
						<a onClick={this.selectComment.bind(this)}>Reply</a>
					</div>
					<div className="comment__add-comment-form-container">
						{addForm}
					</div>
				</div>
			</div>
		)
	}
}