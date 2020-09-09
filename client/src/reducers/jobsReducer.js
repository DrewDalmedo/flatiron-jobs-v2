const START_ADDING_JOBS_REQUEST = 'START_ADDING_JOBS_REQUEST'
const FILTER_JOBS_BY_TYPE = 'FILTER_JOBS_BY_TYPE'
const ADD_JOBS = 'ADD_JOBS'

export default function jobsReducer(
  state = {
    jobs: [],
    filteredJobs: [],
    jobType: "",
    requesting: false,
  },
  action
) {
  switch(action.type) {
    case START_ADDING_JOBS_REQUEST:
      return {
        ...state,
        jobs: [...state.jobs],
        filteredJobs: [...state.filteredJobs],
        requesting: true
      }
    case FILTER_JOBS_BY_TYPE:
      return {
        ...state,
        filteredJobs: action.payload.filteredJobs,
        jobType: action.payload.jobType
      }
    case ADD_JOBS:
      return {
        ...state,
        jobs: action.jobs,
        filteredJobs: action.jobs,
        requesting: false
      }
    default:
      return state
  }
}