import React, { Component }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'

import Search       from '../components/Search'
import { search }   from '../actions/links'

import '../../styles/search.css'

export default class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Search search={this.props.search} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { }
}

function mapDispatchToProps(dispatch) {
    return {
        search: bindActionCreators(search, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)