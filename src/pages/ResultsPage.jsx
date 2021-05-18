import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components'
import JobCard from '../components/JobCard.jsx'

function ResultsPage(props) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.searchResults && 
            props.searchResults.map(result => (
              <JobCard key={result.id} jobDesc={result}/>
            ))
          }
        </Col>
      </Row>
    </Container>
  );
}

export default ResultsPage;