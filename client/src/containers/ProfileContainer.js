import React from 'react'
import { connect } from 'react-redux'

import { deleteJob } from '../actions/userActions'
import Job from '../components/Jobs/Job'

import Accordion from 'react-bootstrap/Accordion'

class ProfileContainer extends React.Component {

  renderSavedJobs = () => {
    return this.props.jobs.map( job => {
      return (
        <Job 
          details={job}
          buttonText="Delete Listing"
          dynamicButtonVariant="danger"
          onButtonClick={
            e => {
              // disable the button to prevent removing it twice
              e.target.disabled = true;

              this.props.deleteJob(job.id)
            }
          }
        />
      )
    })
  }

  checkForSavedJobs = () => {
    if (this.props.jobs.length === 0) {
      return <p>You don't have any jobs saved!</p>
    }
    else {
      return (
        <Accordion>
          { this.renderSavedJobs() }
        </Accordion>
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