import React from 'react';
import { Button, Card } from 'react-bootstrap'
import {withRouter} from'react-router-dom'

function JobCard({history, jobDesc, submitJobId}) {
  return (
    <Card>
      <Card.Header>{jobDesc.title}</Card.Header>
      <Card.Body>
        <Card.Title>{jobDesc.company}</Card.Title>
        {/* <div
          dangerouslySetInnerHTML={{ __html: jobDesc.description }}
        /> */}
        <Button
          variant='primary'
          onClick={() =>
            submitJobId(jobDesc.id).then(history.push(`/results/${jobDesc.id}`))
          }
        >
          Apply now!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default withRouter(JobCard);