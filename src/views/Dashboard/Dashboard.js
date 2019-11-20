import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts-more'

import { Col, Row, Progress, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import { CardWhiteComponent, CardDefaulSideProfiletComponent } from '../../MyComponent/CardCustom/CardComponent'

HighchartsMore(ReactHighcharts.Highcharts)


class Dashboard extends Component {

  render() {
    let config = {

      chart: {
        polar: true,
        type: 'line'
      },


      title: {
        text: 'Passing Grade vs Assessment',
      },

      pane: {
        size: '100%'
      },

      xAxis: {
        categories: [
          'IF',
          'LA',
          'IT',
          'IN',
          'CO',
          'EM',
          'CL',
          'IP',
          'PS',
          'DE',
          'DR',
          'BA',
          'SO',
          'CF',
          'BP',
        ],
        tickmarkPlacement: 'on',
        lineWidth: 0
      },

      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
      },

      tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
      },

      legend: {
        align: 'right',
        verticalAlign: 'middle'
      },

      series: [{
        name: 'Passing Grade',
        data: [2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3],
        pointPlacement: 'on'
      }, {
        name: 'Assessmen',
        data: [3, 2, 1, 2, 4, 4, 2, 3, 4, 4, 3, 2, 4, 3, 3],
        pointPlacement: 'on'
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom'
            },
            pane: {
              size: '70%'
            }
          }
        }]
      }

    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
            </Widget03>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <NavbarComponent />
            <CardWhiteComponent text="Penilaian">
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <div className="brand-card text-center">
                      <CardDefaulSideProfiletComponent text="Assessmen">
                        <span className="h1" style={{ padding: '20px' }}><Badge color="success">Disarankan</Badge></span>
                      </CardDefaulSideProfiletComponent>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="brand-card text-center">
                      <CardDefaulSideProfiletComponent text="KUK">
                        <Row style={{ padding: '20px' }}>
                          <Col xs={12} sm={12} md={6} style={{ borderRight: '1px solid black' }}>
                            <div className="text-value">80</div>
                            <div className="text-uppercase text-muted small">Teori</div>
                          </Col>
                          <Col xs={12} sm={12} md={6}>
                            <div className="text-value">90</div>
                            <div className="text-uppercase text-muted small">Praktek</div>
                          </Col>
                        </Row>
                      </CardDefaulSideProfiletComponent>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="brand-card text-center">
                      <CardDefaulSideProfiletComponent text="EK">
                        <span className="h1" style={{ padding: '20px' }}>94.09</span>
                      </CardDefaulSideProfiletComponent>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <div className="brand-card text-center">
                      <CardDefaulSideProfiletComponent text="PK">
                        <span className="h1" style={{ padding: '20px' }}>96.19</span>
                      </CardDefaulSideProfiletComponent>
                    </div>
                  </Col>
                </Row>
              </Col>
            </CardWhiteComponent>

            <CardWhiteComponent text="Grafik Assessmen">
              <Row>
                <Col xs={12} sm={6} md={6}>
                  <ReactHighcharts config={config} />
                </Col>
                <Col xs={12} sm={6} md={6} style={{ marginBottom: '20px' }}>
                  <Col xs={12} sm={12} md={12}>
                    <CardDefaulSideProfiletComponent text="Assessmen">
                      <Row>
                        <Col xs={12} sm={6} md={6}>
                          <div className="text-left" style={{ padding: '5px' }}>IF (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>LA (min 3)</div>
                          <Progress value="50" >2/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>IT (min 3)</div>
                          <Progress value="100" >4/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>IN (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>CO (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>EM (min 3)</div>
                          <Progress value="50" color="danger">2/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>CL (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>IP (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                        </Col>
                        <Col xs={12} sm={6} md={6}>
                          <div className="text-left" style={{ padding: '5px' }}>PS (min 3)</div>
                          <Progress value="50" color="danger">2/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>DE (min 3)</div>
                          <Progress value="100" >4/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>DR (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>BA (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>SO (min 3)</div>
                          <Progress value="50" color="danger">2/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>CF (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                          <div className="text-left" style={{ padding: '5px' }}>BP (min 3)</div>
                          <Progress value="75" >3/4</Progress>
                        </Col>
                      </Row>
                    </CardDefaulSideProfiletComponent >
                  </Col>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6}>
                  <div className="card-header">
                    <CardDefaulSideProfiletComponent text="Target Pengembangan" fontSize="1.1 rem">
                      <ListGroup style={{ height: '280px', overflowY: 'auto' }}>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>Mampu menginspirasi  </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Mampu Beradaptasi </ListGroupItem>
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
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>ESQ </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Training </ListGroupItem>
                      </ListGroup>
                    </CardDefaulSideProfiletComponent>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <div className="card-header">
                    <CardDefaulSideProfiletComponent text="Target Pelatihan" fontSize="1.1 rem">
                      <ListGroup style={{ height: '280px', overflowY: 'auto' }}>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }}>Kemampuan Membaca Gambar </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Membuat Dokumen Teknis </ListGroupItem>
                        <ListGroupItem className="justify-content-between" style={{ marginTop: '5px', borderRight: '0px', borderLeft: '0px' }} >Membuat Dokumen Pengadaan</ListGroupItem>

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
