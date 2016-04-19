import React, { Component } from 'react'

import '../../styles/search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { searchQuery: '' }
    }

    updateSearchQuery(event) {
        this.setState({ searchQuery: event.target.value })
    }

	search() {
		alert(this.state.searchQuery)
		this.props.search(this.state.searchQuery)
	}

    render() {
        return (
            <div className="search">
                <h1>Search</h1>
                <input type="text"
                	   placeholder="Input you text"
                	   value={this.state.searchQuery}
                	   onChange={this.updateSearchQuery.bind(this)} />
				<button onClick={this.search.bind(this)}>Submit</button>                 	   
            </div>
        )
    }
}