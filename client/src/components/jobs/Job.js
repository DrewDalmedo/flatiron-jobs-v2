import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const daysSinceCreation = (createdAt) => {
  const today = new Date( new Date().toLocaleString() )
  const comparator = new Date(createdAt)

  return Math.ceil((today - comparator) / 86400000)
}

const Job = props => {
  return (
    <Card className="text-center">
      <Accordion.Toggle as={Button} variant="secondary" block eventKey={props.details.id}>
        <strong>{props.details.title}</strong> - <em>{props.details.company}</em>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.details.id}>
        <Card.Body>
          <Card.Title>
            {props.details.title}
          </Card.Title>
          <Card.Text>
            <em>{props.details.company} - Posted {daysSinceCreation(props.details.created_at)} days ago</em>
            <br />
            <br />
            {props.details.description}
          </Card.Text>
          <Button variant="outline-primary" href={props.details.company_url} target="_blank">Learn More</Button>
          <Button variant={props.dynamicButtonVariant} onClick={props.onButtonClick}>{props.buttonText}</Button>
          
        </Card.Body>
      </Accordion.Collapse>
      
    </Card>
  )
}

/*
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
      <div>
        <button onClick={props.onButtonClick}>{props.buttonText}</button>
      </div>
    </div>
  )
}
*/

export default Job