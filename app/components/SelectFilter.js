import React, { Component }     from 'react'
import Tooltip                  from 'rc-tooltip'
import { Router, Route, Link }  from 'react-router'

import { pushState, replaceState }  from 'redux-router'
import { buildRoute }       from '../utils/routes'

import 'rc-tooltip/assets/bootstrap_white.css'
import '../../styles/tooltip.css'
import '../../styles/select-filter.css'


export default class SelectFilter extends Component {
    updateFilter(filter) {
        this.props.updateFilter(filter)
    }

    render() {
         let listItems = ['hot', 'new', 'rising', 'controversial', 'top'].map(value => {
            let filter = {
                ...this.props.filter,
                sort: value
            }   

            return (
                <li onClick={this.updateFilter.bind(this, filter)}>
                    {value}
                </li>
            )
         })

        return (
            <div className="select-filter">
                <Tooltip placement="bottom"
                         trigger="click"
                         overlay={<ul>{listItems}</ul>}>
                    <div className="select-filter__selector">
                        <span>
                            {this.props.filter.sort} <i className="fa fa-chevron-down"></i>
                        </span>
                    </div>
                </Tooltip>
            </div>
        )
    }
}