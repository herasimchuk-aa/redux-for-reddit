import React, { Component } from 'react'
import _ 					from 'lodash'
import classNames			from 'classnames'

import '../../styles/vote.css'

export default class Vote extends Component {
	voteUp() {
		let { name, likes } = this.props.link,
			{ voteUp } = this.props

		if (_.isNil(likes)) {
			voteUp(name)
		}
	}

	voteDown() {
		let { name, likes } = this.props.link,
			{ voteDown } = this.props
		
		if (_.isNil(likes)) {
			voteDown(name)
		}
	}

	render() {
		let { score, likes } = this.props.link,
			isScoreVisible = this.props.isScoreVisible == undefined ? true : false,
			isReadOnly = false

		let arrowUp
		if (isReadOnly || likes === false) {
			arrowUp = (
				<div className="vote__arrow-up vote__arrow-up--disabled">
					<i className="fa fa-arrow-up"></i>
				</div>
			)
		} else if (likes === true) {
			arrowUp = (
				<div className="vote__arrow-up vote__arrow-up--selected">
					<i className="fa fa-arrow-up"></i>
				</div>
			)			
		} else {
			arrowUp = (
				<div className="vote__arrow-up vote__arrow-up--active">
					<i className="fa fa-arrow-up" onClick={this.voteUp.bind(this)}></i>
				</div>
			)			
		}

		let arrowDown
		if (isReadOnly || likes === true) {
			arrowDown = (
				<div className="vote__arrow-down vote__arrow-down--disabled">
					<i className="fa fa-arrow-down"></i>
				</div>
			)
		} else if (likes === false) {
			arrowDown = (
				<div className="vote__arrow-down--selected">
					<i className="fa fa-arrow-down"></i>
				</div>
			)			
		} else {
			arrowDown = (
				<div className="vote__arrow-down vote__arrow-down--active">
					<i className="fa fa-arrow-down" onClick={this.voteDown.bind(this)}></i>
				</div>
			)			
		}

		return (
			<div className="vote">
				{arrowUp}
				{ 
					isScoreVisible ?
					<div className="vote__score">{score}</div> :
					<div></div> 
				}
				{arrowDown}
			</div>
		)
	}
}