import React, { Component } from 'react'

export default class HtmlViewer extends Component {
	createInnerHTML() { 
		return { __html: this.props.content.body } 
	}

	render() {
		let { content } = this.props

		return (
			<div className="thing-viewer">
				<div className="thing-viewer__title">
					<h2></h2>
				</div>
			 	<hr/>
				<div className="thing-viewer__info">
				 	<span>by Dan Abramov for </span>
				</div>
				<div className="thing-viewer__body">
					<div dangerouslySetInnerHTML={this.createInnerHTML()}></div>
				</div>
			</div>
		)
	}
}