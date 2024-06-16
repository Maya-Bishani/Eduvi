import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import './CardsComponent.css';

const lessons = [
  { id: 1, title: "Standard One", description: "Standard 1 is a foundation Standard that reflects 7 important concepts...", buttonText: "Class Details", color: "orange" },
  { id: 2, title: "Standard Two", description: "Standard 2 builds on the foundations of Standard 1 and includes requirements...", buttonText: "Class Details", color: "gray" },
  { id: 3, title: "Standard Three", description: "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...", buttonText: "Class Details", color: "teal" },
  { id: 4, title: "Standard Four", description: "Standard 4 of the Aged Care Quality Standards focuses on services and supports...", buttonText: "Class Details", color: "black" },
  { id: 5, title: "Standard Five", description: "Standard 5 Learning Resources. Learning Resources ensure that the school has the...", buttonText: "Class Details", color: "cyan" },
  { id: 6, title: "Standard Six", description: "Standard 6 requires an organisation to have a system to resolve complaints...", buttonText: "Class Details", color: "orange" },
  { id: 7, title: "Standard Seven", description: "Standard 7 Blood Management mandates that leaders of health service organisations...", buttonText: "Class Details", color: "red" },
  { id: 8, title: "Standard Eight", description: "Standard 8 Course from NCERT Solutions help students to understand...", buttonText: "Class Details", color: "yellow" },
];

const CardsComponent = () => {
  return (
    <Container className="my-5">
      <div className="header-title">Qualified lessons for students</div>
      <div className="header-subtitle">
        A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.
      </div>
      <Nav fill variant="tabs" defaultActiveKey="highschool" className="mb-5 justify-content-center custom-nav">
        <Nav.Item>
          <Nav.Link eventKey="kindergarten">Kindergarten</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="highschool">High School</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="college">College</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        {lessons.map(lesson => (
          <Col key={lesson.id} md={6} lg={3} className="mb-4">
            <Card className="h-100 text-center custom-card">
              <Card.Body>
                <div className={`circle mx-auto mb-3 bg-${lesson.color}`}>{lesson.id}</div>
                <Card.Title>{lesson.title}</Card.Title>
                <Card.Text className="mb-4">{lesson.description}</Card.Text>
                <Button variant="outline-primary" className="custom-class-details-button">{lesson.buttonText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button variant="primary" className="custom-visit-button">Visit More Classes</Button>
      </div>
    </Container>
  );
};

export default CardsComponent;
