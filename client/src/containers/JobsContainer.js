import React from 'react'
import { connect } from 'react-redux'

import { fetchJobs } from '../actions/fetchJobs'

import JobSearchInput from '../components/jobs/JobSearchInput'
import Job from '../components/jobs/Job'

class JobsContainer extends React.Component {

  componentDidMount() {
    this.props.getJobs()
  }

  renderAllJobs = () => {
    //console.log(this.props)
    return this.props.jobs.map( job => {
      return <li> <Job /> </li>
    })
  }

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
          <ul>
            { }
          </ul>
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
    getJobs: () => dispatch(fetchJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer)