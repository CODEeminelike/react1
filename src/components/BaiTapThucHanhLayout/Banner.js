import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="bg-light p-5 mb-4 rounded-3">
      <Container className="py-5 text-center">
        <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
        <p className="fs-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt 
          possimus non incidunt odit vero aliquid similique quae nam nobis illo aspernatur vitae fugiat 
          numquam repellat.
        </p>
        <Button variant="primary" size="lg">Call to action!</Button>
      </Container>
    </div>
  );
};

export default Banner;