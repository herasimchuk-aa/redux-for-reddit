import React, { Component } from 'react'
import _ 					from 'lodash'

import Vote 				from './Vote'

import '../../styles/content-viewer.css'

export default class LinkHeader extends Component {
	render() {
		let { link } = this.props

		if (_.isEmpty(link)) {
			return (
				<div className="thing-header">
					<h1>Select link</h1>
				</div>
			)
		}

		return (
			<div className="thing-header">
				<div className="thing-header__vote-container">
					<Vote link={this.props.link} 
						  voteUp={this.props.voteUp} 
						  voteDown={this.props.voteDown} />	        							
				</div>
				<div className="thing-header__thumbnail-container">
					<img className="small-thumbnail" src={link.thumbnail} />
				</div>
				<div className="thing-header__content-container">
					<div className="thing-header__title">
						{link.title}
					</div>
					<div className="thing-header__tagline-container ">
						submitted 12h ago by ImJustaBagofHammers
					</div>
					<div className="thing-header__controls-container">
						<div>open link</div>
						<div>save</div>
						<div>copy</div>
						<div>share</div>
					</div>
				</div>
			</div>
		)
	}
}