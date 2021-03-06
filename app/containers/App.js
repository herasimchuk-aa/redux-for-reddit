import React, { Component }     from 'react'
import { Provider, connect }    from 'react-redux'
import { bindActionCreators }   from 'redux'

import SidebarContainer         from './SidebarContainer'
import HeaderContainer          from './HeaderContainer'

import '../../styles/reset.css'
import '../../styles/app.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app__header-container">
                    <HeaderContainer />
                </div>
                <div className="app__body-container">
                    <div className="body">
                        <div className="body__sidebar-container">
                            <SidebarContainer />
                        </div>
                        <div className="body__page-container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}