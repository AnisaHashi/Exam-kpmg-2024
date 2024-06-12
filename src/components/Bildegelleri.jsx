import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

export const BildegalleriCard = (props) => {
  const { photo } = props;

  return (
    <div>
      <Container>
        <Row>
          {photo.map((photoItem, index) => {
            return (
              <Col xs={6} md={4} key={index}>
                <Card.Img
                  className="p-4"
                  variant="bottom"
                  src={`https://kpmg-api24-2d843fd88ec2.herokuapp.com/${photoItem.image}`}
                  style={{ width: '100%', objectFit: 'cover', marginTop: 'auto' }}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
