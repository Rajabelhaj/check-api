import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const CardUser = ({user}) => {
  return (
    <div className="carte">
      <Card style={{ width: '18rem' }}>
      <Card.Header className="entete">{user.name}:{user.username}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.company.name}</ListGroup.Item>
        <ListGroup.Item>{user.website}</ListGroup.Item>
      </ListGroup>
    </Card>  
    </div>
  );
};

export default CardUser;