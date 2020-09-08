import React from 'react'
import { connect } from 'react-redux'

import { deleteJob } from '../actions/userActions'
import Job from '../components/Jobs/Job'

class ProfileContainer extends React.Component {

  renderSavedJobs = () => {
    return this.props.jobs.map( job => {
      return <li key={job.id}>Job Here</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderSavedJobs() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.user.jobs
  }
}

export default connect(mapStateToProps)(ProfileContainer);