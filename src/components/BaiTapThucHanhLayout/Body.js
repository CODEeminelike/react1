import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Item from './Item';

const Body = () => {
  const cardData = [
    {
      title: "Card title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente eras necretitullius neque."
    },
    {
      title: "Card title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Epidictus magni sapiente temporis eletrivi busser culpa natus architecto."
    },
    {
      title: "Card title",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente eras necretitullius neque."
    },
    {
      title: "Fred Oat Moon",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Epidictus magni sapiente temporis eletrivi busser culpa natus architecto."
    }
  ];

  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {cardData.map((item, index) => (
          <Col key={index}>
            <Item title={item.title} content={item.content} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Body;