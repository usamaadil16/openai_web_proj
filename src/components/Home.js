import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav , Row, Col, Container } from 'react-bootstrap';
import Display from './Display';


class Home extends Component {
    render(){
        const {header, title, text, link} = this.props;
  return (
    <Container>
    <Row>
        <Col>
        <Display
        title = "generate code"
        text = "generate programming codes in different languages."
        link="/codegen"
        ></Display>
        </Col>
    </Row>
    </Container>
  );
}
}

export default Home;