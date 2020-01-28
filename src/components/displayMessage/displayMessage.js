import React from "react";
import Card from 'react-bootstrap/Card'


import Nav from 'react-bootstrap/Nav';

function DisplayMessage(props) {

  return (
    // <div>
    //   <div>message:{props.message}</div>
    //   <div>username:{props.username}</div>
    //   <div>data:{props.data}</div>
    // </div>
    <>
      <Card border="primary"  >
        <Card.Header>
          <Nav.Link href={"/profile/" + props.username}>{props.username}</Nav.Link>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Nav.Link href={"/messagepage/"+ props.id}>{props.message}</Nav.Link>
           {/* {props.message} */}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {props.date}

          Likes


          {props.likes}
        
        </Card.Footer>

      </Card>
      {/* <br /> */}
    </>
  );
}


export default DisplayMessage;