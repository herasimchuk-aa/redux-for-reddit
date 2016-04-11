import React, { Component }		from 'react'
import { bindActionCreators }	from 'redux'
import { connect }				from 'react-redux'
import shallowEqual				from 'shallowEqual'

import ViewerContainer 			from './ViewerContainer'
import Navigation			 	from '../components/Navigation'

import { loadLinksStarted,
		 voteUpStarted,
		 voteDownStarted }		from '../actions/links'
import { selectLink }			from '../actions/viewer'
import { updateFilter }			from '../actions/filter'
import { getFilterOptions }		from '../reducers/selectors'

export default class NavigationContainer extends Component {
	componentWillMount() {
		let { fetchLinks, filter } = this.props
		fetchLinks(filter)
	}

	componentWillReceiveProps(nextProps) {
    	if (!shallowEqual(this.props.filter, nextProps.filter)) {
      		this.props.fetchLinks(nextProps.filter)
    	}
  	}

	render() {
		return (
			<div>
				<div className="content__navigation-container">
					<Navigation links={this.props.links}
								isLinksPending={this.props.isLinksPending}												
								filter={this.props.filter}
								selectLink={this.props.selectLink}
								loadMore={this.props.fetchLinks}
								updateFilter={this.props.updateFilter}
								voteUp={this.props.voteUp}
								voteDown={this.props.voteDown} />
				</div>
				<div className="content__viewer-container">
					<ViewerContainer />
				</div>
			</div>			
		)
	}
}

function mapStateToProps(state) {
	return { 
		isLinksPending: state.links.isPending,
		links: state.links.entities,
		filter: getFilterOptions(state)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchLinks: bindActionCreators(loadLinksStarted, dispatch),
		selectLink: bindActionCreators(selectLink, dispatch),
		updateFilter: bindActionCreators(updateFilter, dispatch),
		voteUp: bindActionCreators(voteUpStarted, dispatch),
		voteDown: bindActionCreators(voteDownStarted, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)