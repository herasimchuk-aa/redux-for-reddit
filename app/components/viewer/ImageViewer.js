import React, { Component } from 'react'

export default class ImageViewer extends Component {
    render() {
        let { url } = this.props

        return (
            <div className="image-viewer">
                <img src={url}/>            
            </div>
        )
    }
}