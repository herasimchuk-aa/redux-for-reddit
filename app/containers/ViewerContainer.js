import React, { Component }		from 'react'
import { bindActionCreators }	from 'redux'
import { connect }				from 'react-redux'

import { selectLink }			from '../actions/viewer'
import { submitComment }		from '../actions/comments'
import { voteUpStarted,
		 voteDownStarted }		from '../actions/links'		 
import { getSelectedSubredditName,
		 getSelectedLinkName }	from '../reducers/selectors'

import IndexViewer 				from '../components/viewer/IndexViewer'
import LinkHeader 				from '../components/LinkHeader'
import CommentsTree 			from '../components/CommentsTree'

require('../../styles/thing.css')

export default class ViewerContainer extends Component {
	render() {
		return (
			<div className="thing">
				<div className="thing__thing-header-container">
					<LinkHeader link={this.props.link}
								voteUp={this.props.voteUp}
								voteDown={this.props.voteDown}
								isContentLoading={this.props.isContentLoading} />
				</div>
				<div className="thing__view-container">
				 	<IndexViewer content={this.props.content} />
 					<div className="thing__comments-tree-container">
						<CommentsTree comments={this.props.comments} 
									  submitComment={this.props.submitComment}
									  isContentLoading={this.props.isContentLoading} />
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { 
		content: state.viewer.content,
		link: state.viewer.link,
		isContentLoading: state.viewer.isPending,
		comments: state.comments.entities
	}
}

function mapDispatchToProps(dispatch) {
	return {
		voteUp: bindActionCreators(voteUpStarted, dispatch),
		voteDown: bindActionCreators(voteDownStarted, dispatch),				
		submitComment: bindActionCreators(function() {}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewerContainer)