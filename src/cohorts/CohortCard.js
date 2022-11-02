import React from 'react'
import { Card,Row, Col } from 'react-bootstrap'

function CohortCard({cohort, onDeleteCohort}) {
    const { id, name, description } = cohort 

    function handleDeleteCohort(){
        fetch(`/cohorts/${id}`,{
            method: "DELETE",
        }).then((r) => {
            if (r.ok){
                onDeleteCohort(id)
            }
        })
    }
  return (
    <div >
        <Row xs={1} md={3} className="g-4">
            <Col key={id}>
              <Card>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
                </Card>
                </Col>
           </Row>
    
    </div>
  )
}

export default CohortCard