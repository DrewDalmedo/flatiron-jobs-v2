import React, { Component } from 'react'

import { filterJobs } from '../../actions/jobActions'

import { connect } from 'react-redux'

class JobSearchInput extends Component {
  render(){
    return (
      <div className="job-filter">

        <select
        >
          <option value="latest">Latest Postings</option>
          <option value="earliest">Earliest Postings</option>
          <option value="most-applicants">Most Applicants</option>
        </select>

        <select
          value={this.props.jobType}
          onChange={ e => {
            // call filter function here
            this.props.filterJobs(this.props.jobs, e.target.value)
          }}
        >
          <option value="">All</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.job.jobs,
    jobType: state.job.jobType,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterJobs: (jobs, jobType) => dispatch( filterJobs(jobs, jobType) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchInput);