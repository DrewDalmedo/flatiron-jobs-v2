import React from 'react'

const Job = props => {
  return (
    <div>
      <div className="title">
        "{props.details.title}"
      </div>
      <div className="company">
        {props.details.company}
      </div>
      <div className="location">
        {props.details.location}
      </div>
      <div className="description">
        {props.details.description}
      </div>
      <div className="how-to-apply">
        {props.details.how_to_apply}
      </div>
    </div>
  )
}

export default Job