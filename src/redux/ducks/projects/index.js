import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

const GET_PROJECTS = "projects/GET_PROJECTS"
const GET_PROJECT = "projects/GET_PROJECT"

const initialState = {
	projects: [],
	project: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return { ...state, projects: action.payload }
		case GET_PROJECT:
			return { ...state, project: action.payload }
		default:
			return state
	}
}

function getProjects() {
	return (dispatch) => {
		axios.get("/projects").then((resp) => {
			dispatch({
				type: GET_PROJECTS,
				payload: resp.data,
			})
		})
	}
}

function getProject(id) {
	return (dispatch) => {
		axios.get(`/projects/${id}`).then((resp) => {
			dispatch({
				type: GET_PROJECT,
				payload: resp.data,
			})
		})
	}
}

export function useProjects() {
	const dispatch = useDispatch()
	const projects = useSelector((appState) => appState.projectState.projects)
	const project = useSelector((appState) => appState.projectState.project)
	const fetchProjects = () => dispatch(getProjects())
	const fetchProject = (id) => dispatch(getProject(id))

	return { projects, project, fetchProject, fetchProjects }
}
