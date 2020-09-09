import React from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/jobActions'
import { saveJob } from '../actions/userActions'

import JobSearchInput from '../components/Jobs/JobSearchInput'
import Job from '../components/Jobs/Job'

class JobsContainer extends React.Component {

  componentDidMount() {
    this.props.getJobs()
  }

  renderAllJobs = () => {
    return this.props.jobs.map( job => {
      return (
        <li key={job.id}>
          <Job 
            details={job}
            onButtonClick={
              (e) => {
                e.target.textContent = "Saved!"
                e.target.disabled = true;
                this.props.saveJob(job)
              }
            }
          />
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        {/* search component */}
        <JobSearchInput />

        <div className="jobs-container">
          <ul>
            { this.renderAllJobs() }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.job.filteredJobs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(fetchJobs()),
    saveJob: details => dispatch( saveJob(details) ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)