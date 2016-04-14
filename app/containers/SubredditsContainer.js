import React, { Component }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'

import { loadSubredditsStarted }      from '../actions/subreddits'
import SubredditList                     from '../components/SubredditList'

export default class SubredditsContainer extends Component {
    componentDidMount() {
        this.props.fetchSubreddits()
    }

    render() {
        return (
            <div>
                <SubredditList subreddits={this.props.subreddits}/>
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
        fetchSubreddits: bindActionCreators(loadSubredditsStarted, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsContainer)