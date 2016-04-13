import React, { Component }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'

import { fetchSubreddits }      from '../actions/subreddits'
import Subreddits               from '../components/Subreddits'

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
    return {
        subreddits: state.subreddits.entities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSubreddits: bindActionCreators(fetchSubreddits, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsContainer)