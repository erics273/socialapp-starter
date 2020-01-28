import React from "react";
import Card from 'react-bootstrap/Card'

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
          likes
          {props.likes}
        
        </Card.Footer>
      </Card>
      {/* <br /> */}
    </>
  );
}


export default DisplayMessage;