const SAVE_JOB = "SAVE_JOB"
const DELETE_JOB = "DELETE_JOB"

export default function userReducer(
  state = {
    jobs: []
  },
  action
) {
  switch(action.type){
    case SAVE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter(job => job.id !== action.payload)
      }
    default:
      return state
  }
}