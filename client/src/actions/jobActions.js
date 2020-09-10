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

export const sortJobs = (filteredJobs, sortType) => {
  return dispatch => {
    // create a copy of the filteredJobs array
    const sortedJobs = filteredJobs.slice()

    switch(sortType){

      case 'latest':
        sortedJobs.sort( (a, b) => {
          return a.id > b.id ? 1 : -1
        })
        // break is here to prevent fall-through to earliest
        break;
      case 'earliest':
        sortedJobs.sort( (a, b) => {
          return a.id > b.id ? -1 : 1
        })
        break;
      
    }


    dispatch({
      type: 'SORT_JOBS',
      payload: {
        sortType: sortType,
        jobs: sortedJobs 
      }
    })
  }
}