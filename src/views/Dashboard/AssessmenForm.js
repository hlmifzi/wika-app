import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts-more'

import { Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import { CardWhiteComponent, CardAssessmen, CardDefaulSideProfiletComponent } from '../../MyComponent/CardCustom/CardComponent'
import AssessmenCard from './form/AssessmenCard'

HighchartsMore(ReactHighcharts.Highcharts)


class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
            </Widget03>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <NavbarComponent />
            <CardAssessmen text="Disarankan" />
            <CardWhiteComponent text="Penilaian Assessmen Engineering">
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEARNING AGILITY" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="INTEGRITY" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <AssessmenCard title="INNOVATIF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <AssessmenCard title="COLLABORATION" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="EMPOWERING" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEAD SELF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEAD SELF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEAD SELF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <AssessmenCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                </Row>
              </Col>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <div className="card-header">
                    <CardDefaulSideProfiletComponent text="Target Pengembangan" fontSize="1.1 rem">
                      <ListGroup style={{ height: '280px', overflowY: 'auto' }}>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>Production </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Engineering </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Dan</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Qom</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>QSHE </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Muda</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Madya</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Other</ListGroupItem>
                      </ListGroup>
                    </CardDefaulSideProfiletComponent>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6}>
                  <div className="card-header">
                    <CardDefaulSideProfiletComponent text="Program Pengembangan" fontSize="1.1 rem">
                      <ListGroup style={{ height: '280px', overflowY: 'auto' }}>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>Production </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Engineering </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Dan</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Qom</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>QSHE </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Muda</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Madya</ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Other</ListGroupItem>
                      </ListGroup>
                    </CardDefaulSideProfiletComponent>
                  </div>
                </Col>
              </Row>

            </CardWhiteComponent>

          </Col>
        </Row>

      </div >
    );
  }
}

export default Dashboard;
