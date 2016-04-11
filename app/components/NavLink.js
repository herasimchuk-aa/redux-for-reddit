import React, { Component } from 'react'

import Vote 				from './Vote'

import '../../styles/nav-link.css'

export default class NavLink extends Component {
	constructor(props) {
		super(props)
		this.state = { isSelected: false }
	}

  	selectLink() {
		this.setState({isSelected: true})  		
  		this.props.selectLink(this.props.link)
  	}

	render() {
		let link = this.props.link

		return (
			<div className="nav-link">
				<div className="nav-link__vote-container">
					<Vote link={link} 
						  voteUp={this.props.voteUp}
						  voteDown={this.props.voteDown} />
				</div>

					<div className="nav-link__thumbnail-container">
						<img className="small-thumbnail" src={link.thumbnail} />
					</div>				
					<div className="nav_link__body-container">
						<div className="nav-link__tagline">
							<div className="nav-link__tagline-time">
								13 hours ago
							</div>
							<div className="nav-link__tagline-comments">
							 	{link.num_comments} comments
							</div>
						</div>
						<div className="nav-link__domain">({link.subreddit} - {link.domain})</div>
						<div className="nav-link__title">
							{link.title}
						</div>
					</div>

			</div>
		)
	}
}