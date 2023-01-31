import React from 'react';
import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav } from 'react-bootstrap';


class Display extends Component {
    render(){
        const {title, text, link} = this.props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Nav.Link href={link}>
        <Button variant="primary">Go</Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
}
}

export default Display;