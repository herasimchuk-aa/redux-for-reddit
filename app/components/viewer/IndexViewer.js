import React, { Component } from 'react'
import _					from 'lodash'

import HtmlViewer 	from './HtmlViewer'
import VideoViewer  from './VideoViewer'
import ImageViewer	from './ImageViewer'

import '../../../styles/content-viewer.css'

export default class IndexViewer extends Component {
	render() {
		let contentViewer,
			{ content } = this.props

		if (_.isEmpty(content)) {
			return (
				<div>no content</div>
			)
		}

		if (content.isVideo) {
			contentViewer = (<VideoViewer url={content.link} />)
		}
		else if (content.isImage) {
			contentViewer = (<ImageViewer url={content.link} />)
		}
		else {
			contentViewer = (<HtmlViewer content={content} />)
		}

		return (
			<div className="thing-viewer">
				{contentViewer}
			</div>
		)
	}
}
