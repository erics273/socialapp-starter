import React from "react";

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function DisplayLike(props) {
    return (
    //     <div>

    // {"Like: "}
    // <Nav.Link href={"/profile/" + props.likeInfo.username}>{props.likeInfo.username}</Nav.Link>
    //         {/* <div>date: {props.likeInfo.createdAt}</div> */}
    //     </div>
        <Card>
            <Card.Body>
                <Nav.Link href={"/profile/" + props.likeInfo.username}>{props.likeInfo.username}</Nav.Link>
            </Card.Body>
        </Card>
    );
}
export default DisplayLike;