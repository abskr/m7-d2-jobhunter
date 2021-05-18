import React from 'react';
import { Button, Card } from 'react-bootstrap'
// import {withRouter} from'react-router-dom'

function JobCard({history, jobDesc}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{jobDesc.company}</Card.Title>
        <div
          dangerouslySetInnerHTML={{ __html: jobDesc.description }}
        />
        <Button variant='primary'>Apply now!</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;