import React from "react";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function DisplayMessage(props) {
  return (
    // <div>
    //   <div>message:{props.message}</div>
    //   <div>username:{props.username}</div>
    //   <div>data:{props.data}</div>
    // </div>
    <>
      <Card border="primary"  >
        <Card.Header>{props.username}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.message}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {props.date}
          <Accordion.Toggle as={Button} variant="link" eventKey={props.key}>
          Likes
        </Accordion.Toggle>

          {props.likes}
        
        </Card.Footer>
        <Accordion.Collapse eventKey={props.key}>
          <Card.Body>{props.likeArray}</Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* <br /> */}
    </>
  );
}


export default DisplayMessage;