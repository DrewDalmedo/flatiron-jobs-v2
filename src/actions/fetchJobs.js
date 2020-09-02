export function fetchJobs(url) {
  return (dispatch) => {
    dispatch({type: 'START_ADDING_JOBS_REQUEST'});
    fetch(url)
      .then(response => response.json())
      .then(jobs => dispatch({ type: 'ADD_JOBS', jobs }))
  }
}