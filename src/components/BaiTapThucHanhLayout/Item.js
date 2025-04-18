import React from 'react';
import { Card } from 'react-bootstrap';

const Item = ({ title, content }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center mb-4">{title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {content}
        </Card.Text>
        <div className="text-center mt-auto">
          <button className="btn btn-outline-primary">View details</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;