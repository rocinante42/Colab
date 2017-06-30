// @flow
import React, { Component } from 'react';
import { Jumbotron, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Components
import Quote from './Quote';
// import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="container text-center">
            <Image style={{ maxWidth: '180px', maxHeight: '180px', margin: 'auto' }} src={require('./../static/colab2.png')} alt="171x180" responsive />
            <h1>CLTracker</h1>
            <p><Link to="/tracker">Iniciar</Link></p>
          </div>
        </Jumbotron>
        <div className="container">
          <Col sm={12} md={12}>
          </Col>
        </div>
      </div>
    );
  }
}
