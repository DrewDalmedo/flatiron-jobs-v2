import React, { Component } from 'react'

class JobSearchInput extends Component {
  state = {
    // fill me in later when inputs are made
  }

  render() {
    return (
      <div>

        <select>
          <option>Latest Postings</option>
          <option>Earliest Postings</option>
          <option>Most Applicants</option>
        </select>

        <select>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
        </select>

      </div>
    )
  }
}

export default JobSearchInput