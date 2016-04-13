import React, { Component } from 'react'
import _                    from 'lodash'

import Vote                 from './Vote'

import '../../styles/link-header.css'

export default class LinkHeader extends Component {
    render() {
        let { link } = this.props

        if (_.isEmpty(link)) {
            return (
                <div className="thing-header">
                </div>
            )
        }

        return (
            <div className="link-header">
                <div className="link-header__vote-container">
                    <Vote link={this.props.link} 
                          voteUp={this.props.voteUp} 
                          voteDown={this.props.voteDown} />                                     
                </div>
                <div className="link-header__thumbnail-container">
                    <img className="small-thumbnail" src={link.thumbnail} />
                </div>
                <div className="link-header__content-container">
                    <div className="thing-header__title">
                        {link.title}
                    </div>
                    <div className="link-header__tagline-container ">
                        submitted 12h ago by ImJustaBagofHammers
                    </div>
                    <div className="link-header__controls-container">
                        <a href={link.url} target="_blank">open link</a>
                        <a>save</a>
                        <a>copy</a>
                        <a>share</a>
                    </div>
                </div>
            </div>
        )
    }
}