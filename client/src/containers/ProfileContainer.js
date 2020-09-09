import React from 'react'
import { connect } from 'react-redux'

import { deleteJob } from '../actions/userActions'
import Job from '../components/Jobs/Job'

class ProfileContainer extends React.Component {

  renderSavedJobs = () => {
    return this.props.jobs.map( job => {
      return (
        <li key={job.id}>
          <Job 
            details={job}
            buttonText="Delete Listing"
            onButtonClick={
              e => {
                // disable the button to prevent removing it twice
                e.target.disabled = true;

                this.props.deleteJob(job.id)
              }
            }
          />
        </li>
      )
    })
  }

  checkForSavedJobs = () => {
    if (this.props.jobs.length === 0) {
      return <p>You don't have any jobs saved!</p>
    }
    else {
      return (
        <ul>
          { this.renderSavedJobs() }
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <h3>Saved Job Listings</h3>
        { this.checkForSavedJobs() }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.user.jobs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteJob: (id) => dispatch( deleteJob(id) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);