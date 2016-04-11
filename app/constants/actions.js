const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'

function createAsyncTypes(base) {
	const res = {};
	[REQUEST, SUCCESS, ERROR].forEach(type => res[type] = `${base}_${type}`)
	return res;
}

export const GET_PROJECTS_ASYNC = createAsyncTypes('GET_PROJECTS')
export const ADD_PROJECT_ASYNC = createAsyncTypes('ADD_PROJECT')
export const EDIT_PROJECT_ASYNC = createAsyncTypes('EDIT_PROJECT')
export const REMOVE_PROJECT_ASYNC = createAsyncTypes('REMOVE_PROJECT')
