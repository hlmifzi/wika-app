import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts-more'

import { Col, Row } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import { CardWhiteComponent } from '../../MyComponent/CardCustom/CardComponent'
import KUKCard from './form/KUKCard'

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
            <CardWhiteComponent text="Lingkup Kerja">
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <KUKCard title="Memahami Document Gambar Tender" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEARNING AGILITY" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="INTEGRITY" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <KUKCard title="INNOVATIF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <KUKCard title="COLLABORATION" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="EMPOWERING" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEAD SELF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <KUKCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEAD SELF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <KUKCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEAD SELF" assessmen={2} fet={3} gap={-1} color='#f86c6b' />
                  <KUKCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                  <KUKCard title="LEAD SELF" assessmen={3} fet={2} gap={+1} color='#4dbd74' />
                </Row>
              </Col>

            </CardWhiteComponent>

          </Col>
        </Row>

      </div >
    );
  }
}

export default Dashboard;
