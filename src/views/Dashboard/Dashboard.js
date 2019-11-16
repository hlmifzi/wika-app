import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Col, Row } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import { CardWhiteComponent, CardDefaulSideProfiletComponent } from '../../MyComponent/CardCustom/CardComponent'

class Dashboard extends Component {

  render() {
    const options = {

      chart: {
        polar: true,
        type: 'line'
      },

      accessibility: {
        description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
      },

      title: {
        text: 'Budget vs spending',
        x: -80
      },

      pane: {
        size: '80%'
      },

      xAxis: {
        categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
          'Information Technology', 'Administration'],
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
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
      },

      legend: {
        align: 'right',
        verticalAlign: 'middle'
      },

      series: [{
        name: 'Allocated Budget',
        data: [43000, 19000, 60000, 35000, 17000, 10000],
        pointPlacement: 'on'
      }, {
        name: 'Actual Spending',
        data: [50000, 39000, 42000, 31000, 26000, 14000],
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
                        <span className="h1" style={{ padding: '20px' }}>24.00</span>
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

            <div id="container-spider">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}

export default Dashboard;
