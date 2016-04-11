import React, { Component } from 'react'

require('../../styles/projectManager.css')

export default class ProjectManager extends Component {
	render() {
		const { projects, createProject, removeProject } = this.props;

		return (
			<div className='project-manager'>
				<div className='project-manager__project-bar-container'>
					<ProjectBar
						createProject={createProject}
						removeProject={removeProject} />
				</div>
				<div className='project-manager__project-listing-container'>
					<ProjectListing 
						projects={projects} />
				</div>
			</div>
		)
	}
}

class ProjectBar extends Component {
	handleCreateNewClick() {
		this.props.createProject('new')
	}

	handleRemoveClick() {
		console.log('remove_click')
		this.props.removeProject('1')
	}

	render() {
		return (
			<div className='project-bar'>
				<span>Project Bar</span>
				<button onClick={this.handleCreateNewClick.bind(this)}>Create</button>
				<button onClick={this.handleRemoveClick.bind(this)}>Remove</button>
			</div>
		)
	}
}

class ProjectListing extends Component {
	render() {
		let projects = this.props.projects.map((project) => {
			return <span>id: {project.id}, name: {project.name}</span>
		});

		return (
			<div className='project-listing'>
				<span>Project Listing</span>
				{projects}
			</div>
		)
	}
}

