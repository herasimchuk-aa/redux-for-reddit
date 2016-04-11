import React, { Component }		from 'react'
import { bindActionCreators }	from 'redux'
import { connect }				from 'react-redux'

import * as subreddits			from '../actions/subreddits'
import Subreddits 				from '../components/Subreddits'

export default class SubredditsContainer extends Component {
	componentDidMount() {
		this.props.fetchSubreddits()
	}

	render() {
		return (
			<div>
				<Subreddits subreddits={this.props.subreddits}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	let subreddits = state.subreddits.entities

	return {
		subreddits		
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSubreddits: bindActionCreators(subreddits.fetchSubreddits, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsContainer)