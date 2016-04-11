import React, { Component } 	from 'react'
import Search 					from '../components/Search'

require('../../styles/search.css')

export default class SearchContainer extends Component {
	render() {
		return (
			<div>
				<Search/>
			</div>
		)
	}
}