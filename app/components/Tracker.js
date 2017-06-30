import React from 'react';
import serialize from 'form-serialize';
import timestamp from 'time-stamp';
import _ from 'lodash';
import stopwatch from 'node-stopwatch'; // methods: start() stop() reset() restart()
import { Link } from 'react-router-dom';
import { Jumbotron, Col, FormGroup, FormControl, Button } from 'react-bootstrap';


function arrayToTrackerUserLine(obj) {
  return <TrackerUserLine username={obj.username} />;
}

function mapUsersToLines(users) {
  const a = _.map(users, arrayToTrackerUserLine);
  return a;
}

class TrackerTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hours: '00', minutes: '01', seconds: '12' };
  }
  componentDidMount() {
    const timer = stopwatch.create();
    timer.start();
  }
  render() {
    return (
      <div>
        <b>
          { `${this.state.hours}:${this.state.minutes}:${this.state.seconds}` }
        </b>
      </div>
    );
  }
}

class TrackerUserLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Col sm={5} md={5}>
          <h1>{this.props.username}</h1>
        </Col>
        <Col sm={5} md={5}>
          <h1><TrackerTimer /></h1>
        </Col>
        <Col sm={2} md={2}>
          <h1><Button bsStyle="warning">Checkout!</Button></h1>
        </Col>
        <hr />
        <hr />
      </div>
    );
  }
}

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('sending the form');
    const data = serialize(e.target, { hash: true });
    data.date = timestamp('YYYY/MM/DD');
    data.time = timestamp('HH:mm:ss');
    this.props.addUser(data);
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="container text-center">
            <h1>Tracker</h1>
            <Link to="/home">Go back</Link>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <Col sm={12} md={10}>
                <FormGroup>
                  <FormControl name="username" type="text" placeholder="Nombre de Usuario" />
                </FormGroup>
              </Col>
              <Col sm={12} md={2}>
                <Button type="submit">Submit</Button>
              </Col>
            </form>
          </div>
        </Jumbotron>
        <div className="container">
          <Col sm={12} md={12}>
            { mapUsersToLines(this.props.tracker.users) }
          </Col>
        </div>
      </div>
    );
  }
}

export default Tracker;
