import React, { Component } from 'react'
import _                    from 'lodash'

import NavLink              from './NavLink'
import SelectFilter         from './SelectFilter'

import '../../styles/navigation.css'

export default class Navigation extends Component {
    title(filter) {
        switch(filter.type) {
            case 'subreddit':
                return `r/${filter.subreddit}`
            case 'front':
                return `front`
            case 'search':
                return `search: ${filter.query}`                            
        }
    }

    loadMore() {        
        let filter = {
            ...this.props.filter,
            after: _.last(this.props.links).id
        }

        this.props.loadMore(filter)
    }

    render() {
        let links = this.props.links.map(link => {
            return (
                <NavLink link={link} 
                         selectLink={this.props.selectLink}
                         voteUp={this.props.voteUp}
                         voteDown={this.props.voteDown} />
            )
        })

        return (
            <div className="navigation">
                <div className="navigation__header">
                    <div className="navigation__header-title">                          
                        {this.title(this.props.filter)}
                    </div>
                    <div className="navigation__header-container">
                        <span className="navigation__header-count">
                            {links.length} links
                        </span>
                        <span className="navigation__header-filter">
                            <SelectFilter filter={this.props.filter} updateFilter={this.props.updateFilter} />
                        </span>
                    </div>
                </div>
                <div className="navigation__links">
                    {links}
                    <div className="navigation__load-more" onClick={this.loadMore.bind(this)}>
                        {this.props.isLinksPending ?
                            <i className="fa fa-refresh fa-spin fa-3x"></i> :
                            <h3>load more</h3>}                 
                    </div>
                </div>
            </div>                      
        )
    }
}