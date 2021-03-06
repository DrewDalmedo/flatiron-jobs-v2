import React from 'react'
import homeImg from './home.jpg'

// react-bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

// react-router-bootstrap
import { LinkContainer } from 'react-router-bootstrap'

const Home = (props) => {
  return (
    <Container fluid className="header" style={{backgroundImage: homeImg}}>
      <Row className="justify-content-xl-center">
        <h1> Welcome to <strong className="slash">//</strong> Flatiron Jobs</h1>
      </Row>
      <Row className="justify-content-xl-center">
        <LinkContainer to="/jobs">
          <Button variant="outline-primary">Check out some jobs</Button>
        </LinkContainer>
      </Row>
    </Container>
  )
}

export default Home