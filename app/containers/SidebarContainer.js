import React, { Component }		from 'react'
import { bindActionCreators }	from 'redux'
import { connect }				from 'react-redux'

import Sidebar			 		from '../components/Sidebar'
import { isUserAuthorized }		from '../reducers/selectors'
import { loginStarted }			from '../actions/auth'

export default class SidebarContainer extends Component {
	render() {
		return (
			<Sidebar IsAuthorized={this.props.IsAuthorized}
					 login={this.props.login} />
		)
	}
}

function mapStateToProps(state) {
	return { 
		IsAuthorized: isUserAuthorized(state)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		login: bindActionCreators(loginStarted, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)