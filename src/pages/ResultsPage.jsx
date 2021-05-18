import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components'
import JobCard from '../components/JobCard.jsx'

function ResultsPage(props) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          {props.searchResults && 
            props.searchResults.map(result => (
              <JobCard jobDesc={result}/>
            ))
          }
          <JobMap></JobMap>
        </Col>
      </Row>
    </Container>
  );
}

const JobMap = styled.div`
  border: solid 5px
`

export default ResultsPage;