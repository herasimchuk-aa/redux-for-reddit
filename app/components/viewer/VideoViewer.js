import React, { Component } from 'react'

export default class VideoViewer extends Component {
    render() {
        let { url } = this.props

        return (
            <div className="video-viewer">
                <video width="520" height="440" autoPlay loop>
                    <source src={url}/>
                    Your browser does not support the video tag.
                </video>    
            </div>
        )
    }
}