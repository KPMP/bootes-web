import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import DataSummary from './DataSummary';
import LeftContent from './LeftContent';

class Home extends Component {
  render() {
    return (
      <article>
        <Row>
          <Col md='12' lg='4'>
            <LeftContent/>
          </Col>
          <Col md='12' lg='8'>
            <DataSummary/>
          </Col>
        </Row>
      </article>
    );
  }
}

export default Home;
