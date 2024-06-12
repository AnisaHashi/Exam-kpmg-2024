import React from 'react';
import { Col, Row, Card, ListGroup, Nav, Tab } from 'react-bootstrap';

const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { day: '2-digit', month: 'long' };
  const formatter = new Intl.DateTimeFormat('en-GB', options);

  const formattedDate = formatter.format(date);
  return formattedDate;
};

const ReminderCard = ({ items, dueDate, image }) => {
  return (
    <div className="mt-4 px-2">
      <ListGroup as="ol">
        {items.map((item, index) => (
          <ListGroup.Item
            as="li"
            key={index}
            className="d-flex justify-content-between border-1 align-items-start py-3 mb-3"
            style={{ backgroundColor: index % 2 === 0 ? '#E6EFF8' : '#E6F6F6' }}
          >
            <div className="me-2 text-center" style={{ flex: '1' }}>
              <p className="h6 text-start">{formatDate(dueDate)}</p>
              <p className="h6 text-start">{item}</p>
            </div>
            <div style={{ flex: '0 0 100px' }}>
              <img
                src={`https://kpmg-api24-2d843fd88ec2.herokuapp.com/${image}`}
                alt="Placeholder"
                style={{
                  borderRadius: '10px',
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export const Reminder = (props) => {
  if (!props.reminders.length) return null;
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey={`tab-${props.reminders[0]?._id}`}>
        <Row>
          <Nav variant="pills" className="flex-row mt-4 justify-content-between">
            {props.reminders.map((item) => (
              <Nav.Item className="mx-4 mb-3" key={item._id}>
                <Nav.Link
                  className="rounded-circle text-white bg-primary"
                  eventKey={`tab-${item._id}`}
                >
                  {new Date(item.date).getDate()}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content className="mt-2">
            {props.reminders.map((item) => (
              <Tab.Pane eventKey={`tab-${item._id}`} key={item._id}>
                <ReminderCard image={item.image} dueDate={item.date} items={[item.title]} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Row>
      </Tab.Container>

      <div className="container mt-5">
        <h5>
          Today's Birthday <hr style={{ border: 'px solid blue' }} />
        </h5>
        <Row className="mb-4">
          {props.birthdays.map((birthday) => (
            <Col key={birthday._id} md={6}>
              <Card className="p-3" style={{ backgroundColor: '#F0E9F1', borderRadius: '15px' }}>
                <Card.Body className="d-flex align-items-center">
                  <div style={{ flex: '0 0 50px' }}>
                    <Card.Img
                      src={`https://kpmg-api24-2d843fd88ec2.herokuapp.com/${birthday.image}`}
                      style={{
                        width: '100px',
                        height: '80px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                      {birthday.name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: '0.9rem' }}>
                      Cake and celebration in the canteen at 12:30 today.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
