import React from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/jobActions'

import JobSearchInput from '../components/Jobs/JobSearchInput'
import Job from '../components/Jobs/Job'

class JobsContainer extends React.Component {

  componentDidMount() {
    this.props.getJobs()
  }

  renderAllJobs = () => {
    //console.log(this.props)
    return this.props.jobs.map( job => {
      return <li key={job.id}><Job details={job}/></li>
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
    jobs: state.job.jobs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(fetchJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)