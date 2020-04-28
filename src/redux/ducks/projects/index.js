import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

const GET_PROJECTS = "projects/GET_PROJECTS"

const initialState = {
	projects: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PROJECTS:
			return { ...state, projects: action.payload }
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

export function useProjects() {
	const dispatch = useDispatch()
	const projects = useSelector((appState) => appState.projectState.projects)

	useEffect(() => {
		dispatch(getProjects())
	}, [dispatch])

	return { projects }
}
