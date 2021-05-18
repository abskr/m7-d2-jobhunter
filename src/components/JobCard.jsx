import React from 'react';
import { Button, Card } from 'react-bootstrap'

function JobCard({jobDesc}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{jobDesc.company}</Card.Title>
        <div
          dangerouslySetInnerHTML={{ __html: jobDesc.description }}
        />
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default JobCard;