import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filterJobs, sortJobs } from '../../actions/jobActions'


class JobSearchInput extends Component {
  render(){
    return (
      <div className="job-filter">

        <select
          value={this.props.sortType}
          onChange={ e => {
            this.props.sortJobs( this.props.filteredJobs, e.target.value )
          }}
        >
          <option value="latest">Latest Postings</option>
          <option value="earliest">Earliest Postings</option>
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
    filteredJobs: state.job.filteredJobs,
    jobType: state.job.jobType,
    sortType: state.job.sortType,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterJobs: (jobs, jobType) => dispatch( filterJobs(jobs, jobType) ),
    sortJobs: (jobs, sortType) => dispatch( sortJobs(jobs, sortType) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchInput);