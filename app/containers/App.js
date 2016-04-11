import React, { Component } 	from 'react'
import { Provider, connect } 	from 'react-redux'
import { bindActionCreators }	from 'redux'

import SidebarContainer 		from './SidebarContainer'
import HeaderContainer          from './HeaderContainer'

import '../../styles/reset.css'
import '../../styles/app.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<HeaderContainer />
				<div className="content">
					<div className="content__inner-container">
						<div className="content__sidebar-container">
							<SidebarContainer />
						</div>
						<div className="content__view">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}