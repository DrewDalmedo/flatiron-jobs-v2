export function fetchJobs() {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_JOBS_REQUEST'});
    fetch('/api/jobs')
      .then(response => response.json())
      .then(jobs => dispatch({ type: 'ADD_JOBS', jobs }))
  }
}