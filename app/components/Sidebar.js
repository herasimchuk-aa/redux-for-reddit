import React, { Component } from 'react'
import { Link } from 'react-router'

import '../../styles/sidebar.css'

export default class Sidebar extends Component {
    auth() {

    }

    render() {
        let user = this.props.user

        let signButton
        if (this.props.IsAuthorized) {
            signButton = (
                <a onClick={this.props.login.bind(this)}>
                    <i className="fa fa-sign-out"></i>
                </a>    
            )
        }
        else {
            signButton = (
                <a onClick={this.props.login.bind(this)}>
                    <i className="fa fa-sign-in"></i>
                </a>    
            )
        }

        return (
            <div className="sidebar">
                <div className="sidebar__icon">
                    <Link to={'/r'}>
                        <i className="fa fa-reddit-alien"></i>
                    </Link>
                </div>          
                <div className="sidebar__icon">
                    {signButton}
                </div>
                <div className="sidebar__icon">
                    <a href="">
                        <i className="fa fa-user"></i>
                    </a>
                </div>
                <div className="sidebar__icon">
                    <Link to={'/search'}>
                        <i className="fa fa-search"></i>
                    </Link> 
                </div>
                <div className="sidebar__icon">
                    <Link to={'/subreddits'}>
                        <i className="fa fa-list"></i>
                    </Link> 
                </div>              
            </div>      
        )
    }
}