import React, { Component } from 'react'

export default class ImageViewer extends Component {
	render() {
		let { url } = this.props

		return (
			<div className="thing-viewer">
				<img src={url}/>			
			</div>
		)
	}
}