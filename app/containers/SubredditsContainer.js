import React, { Component }     from 'react'
import { bindActionCreators }   from 'redux'
import { connect }              from 'react-redux'

import { loadSubredditsStarted,
         selectSubreddit }      from '../actions/subreddits'
import SubredditList            from '../components/SubredditList'

export default class SubredditsContainer extends Component {
    componentDidMount() {
        this.props.fetchSubreddits()
    }

    render() {
        return (
            <div>
                <SubredditList subreddits={this.props.subreddits}
                               page={this.props.page} 
                               isPending={this.props.isPending}
                               fetchSubreddits={this.props.fetchSubreddits}
                               selectSubreddit={this.props.selectSubreddit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        subreddits: state.subreddits.entities,
        page: state.subreddits.page,
        isPending: state.subreddits.isPending
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSubreddits: bindActionCreators(loadSubredditsStarted, dispatch),
        selectSubreddit: bindActionCreators(selectSubreddit, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsContainer)