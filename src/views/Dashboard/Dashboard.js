import React, { Component } from 'react';
import { Col, Row, Card, CardBody, Nav, NavItem, NavLink } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Col xs={12} sm={12} md={12}>
              <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
              </Widget03>
            </Col>
          </Col>
          <Col xs={12} sm={6} md={9}>
            <Col xs={12} sm={12} md={12}>
              <Card>
                <CardBody>
                  <Nav>
                    <NavItem>
                      <NavLink href="#">Overview</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Assesment</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">KUK</NavLink>
                    </NavItem>
                  </Nav>
                </CardBody>
              </Card>
            </Col>
          </Col>
        </Row>

      </div >
    );
  }
}

export default Dashboard;
