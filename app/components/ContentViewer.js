import React, { Component } from 'react'

import '../../styles/content-viewer.css'

export default class ContentViewer extends Component {
	render() {
		let { content } = this.props

function createMarkup() { return {__html: content }; };

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
					<div dangerouslySetInnerHTML={createMarkup()}></div>
				</div>
			</div>
		)
	}
}