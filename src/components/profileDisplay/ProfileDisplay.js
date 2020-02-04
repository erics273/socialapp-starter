import React from 'react';

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function ProfileDisplay(props) {
  return (
    <Card >
      <Card.Header><h2>Inker</h2></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>User Name: <strong>{props.username}</strong></ListGroup.Item>
        <ListGroup.Item>Display Name: <strong>{props.displayName}</strong></ListGroup.Item>
        <ListGroup.Item>About: <strong>{props.about}</strong></ListGroup.Item>
      </ListGroup>
    </Card>

    )
}

export default ProfileDisplay;