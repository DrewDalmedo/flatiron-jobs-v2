import React, { Component } from 'react'

const JobSearchInput = (props) => {
    return (
      <div className="job-filter">

        <select>
          <option>Latest Postings</option>
          <option>Earliest Postings</option>
          <option>Most Applicants</option>
        </select>

        <select>
          <option>All</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
        </select>

      </div>
    )
}

export default JobSearchInput;