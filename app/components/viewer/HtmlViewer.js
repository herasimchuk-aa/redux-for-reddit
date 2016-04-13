import React, { Component } from 'react'
import decode               from 'decode-html'

export default class HtmlViewer extends Component {
    createInnerHTML() { 
        return { __html: decode(this.props.content.body) } 
    }

    render() {
        let { content } = this.props

        return (
            <div className="html-viewer">
                <div className="viewer__title">
                    <h2></h2>
                </div>
                <hr/>
                <div className="viewer__info">
                    <span>by Dan Abramov for </span>
                </div>
                <div className="viewer__body">
                    <div dangerouslySetInnerHTML={this.createInnerHTML()}></div>
                </div>
            </div>
        )
    }
}