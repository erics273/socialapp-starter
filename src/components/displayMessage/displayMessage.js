import React from "react";
import Card from 'react-bootstrap/Card'
import Octicon, {Thumbsup} from '@primer/octicons-react'

import Button from 'react-bootstrap/Button';
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
          {/* {props.date} */}

          {"Likes: "}


          {props.likes}
          {"  "}
          <Button onClick={() => props.likeButtonFunction(props.likeButtonFunctionParameter)} variant={props.likeButtonVarriant}><Octicon icon={Thumbsup}/></Button>

        </Card.Footer>

      </Card>
      {/* <br /> */}
    </>
  );
}


export default DisplayMessage;