export function getProjects() {	
	const loadProjectsByTimer = (resolve) => {
		setTimeout(() => {
			resolve([
				{ id: '1', name: 'first' },
				{ id: '2', name: 'second' }
			])
		}, 3000)
	}

	return new Promise(loadProjectsByTimer)
}

export function addProject(name) {
	const addProjectByTimer = (resolve) => {
		setTimeout(() => {
			resolve([
				{ id: '3', name: 'third' }
			])
		}, 3000)
	}

	return new Promise(addProjectByTimer)
}

export function removeProject(id) {
	const removeProjectByTimer = (resolve) => {
		setTimeout(() => {
			resolve(
				{ success: true }
			)
		}, 3000)
	}

	return new Promise(removeProjectByTimer)
}