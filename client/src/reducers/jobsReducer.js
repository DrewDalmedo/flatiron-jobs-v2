const START_ADDING_JOBS_REQUEST = 'START_ADDING_JOBS_REQUEST'
const ADD_JOBS = 'ADD_JOBS'

export default function jobsReducer(
  state = {
    jobs: [],
    requesting: false,
  },
  action
) {
  switch(action.type) {
    case START_ADDING_JOBS_REQUEST:
      return {
        ...state,
        jobs: [...state.jobs],
        requesting: true
      }
    case ADD_JOBS:
      return {
        ...state,
        jobs: action.jobs,
        requesting: false
      }
    default:
      return state
  }
}