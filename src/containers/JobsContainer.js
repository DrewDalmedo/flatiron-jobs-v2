import React from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/fetchJobs'

import JobSearchInput from '../components/jobs/JobSearchInput'

class JobsContainer extends React.Component {

  render() {
    return (
      <div>
        <div>
          {/* add a navbar using react-bootstrap! */}
          Navbar Here
        </div>

        {/* search component */}
        <JobSearchInput />

        <div>
          List here
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: (url) => dispatch(fetchJobs(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)