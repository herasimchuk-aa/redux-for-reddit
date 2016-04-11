import React, { Component }		from 'react'
import { bindActionCreators }	from 'redux'
import { connect }				from 'react-redux'

import Header from '../components/Header'

export default class HeaderContainer extends Component {
	render() {
		return (
			<Header />
		)
	}
}

function mapStateToProps(state) {
	return { 
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)