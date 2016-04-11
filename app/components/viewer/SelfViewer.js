import React, { Component } from 'react'

import HtmlViewer 	from './HtmlViewer'
import VideoViewer  from './VideoViewer'
import ImageViewer	from './ImageViewer'

export default class SelfViewer extends Component {
	render() {
		let { url } = this.props

		return (
			<div className="thing-viewer">
				<img src={url}/>			
			</div>
		)
	}
}