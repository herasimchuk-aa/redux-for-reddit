import React, { Component } from 'react'
import _                    from 'lodash'

import HtmlViewer   from './HtmlViewer'
import VideoViewer  from './VideoViewer'
import ImageViewer  from './ImageViewer'
import SelfViewer   from './SelfViewer'

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
        else if (content.isSelf) {
            contentViewer = (<SelfViewer content={content} />)
        }
        else {
            contentViewer = (<HtmlViewer content={content} />)
        }

        return (
            <div className="index-viewer">
                {contentViewer}
            </div>
        )
    }
}
