import React, { Component } from 'react'
import decode               from 'decode-html'

export default class SelfViewer extends Component {
    createInnerHTML() { 
        return { __html: decode(this.props.content.body) } 
    }

    render() {
        let { content } = this.props

        return (
            <div className="self-viewer">
                <div className="viewer__body">
                    <div dangerouslySetInnerHTML={this.createInnerHTML()}></div>
                </div>         
            </div>
        )
    }
}