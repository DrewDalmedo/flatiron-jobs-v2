export function fetchJobs() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_JOBS_REQUEST'});
    fetch('/api/jobs')
      .then(response => response.json())
      .then(jobs => dispatch({ type: 'ADD_JOBS', jobs }))
  }
}

export const filterJobs = (jobs, jobType) => {
  return (dispatch) => {
    dispatch({
      type: 'FILTER_JOBS_BY_TYPE',
      payload: {
        jobType: jobType,
        filteredJobs: jobType === "" ? jobs : jobs.filter( job => job.job_type === jobType)
      }
    })
  }
}