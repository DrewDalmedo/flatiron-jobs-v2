import React from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/jobActions'
import { saveJob } from '../actions/userActions'

import JobSearchInput from '../components/Jobs/JobSearchInput'
import Job from '../components/Jobs/Job'

import Accordion from 'react-bootstrap/Accordion'

class JobsContainer extends React.Component {

  componentWillMount() {
    this.props.getJobs()
  }

  renderAllJobs = () => {
    return this.props.jobs.map( job => {
      return (
        <Job 
          details={job}
          buttonText="Save Listing"
          dynamicButtonVariant="success"
          onButtonClick={
            (e) => {
              e.target.textContent = "Saved!"
              e.target.disabled = true;
              this.props.saveJob(job)
            }
          }
        />
      )
    });
  }

  render() {
    return (
      <div>
        {/* search component */}
        <JobSearchInput />

        <div className="jobs-container">
          <Accordion>
            { this.renderAllJobs() }
          </Accordion>
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