import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts-more'

import { Col, Row, Progress, ListGroup, ListGroupItem, Badge } from 'reactstrap';

import Widget04 from '../Widgets/Widget04';

import NavbarDashboardComponent from '../../MyComponent/Nav/NavbarDashboardComponent'
import { CardWhiteComponent, CardDefaulSideProfiletComponent } from '../../MyComponent/CardCustom/CardComponent'

HighchartsMore(ReactHighcharts.Highcharts)


class Dashboard extends Component {

  render() {
    let config = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Pendidikan'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> (1300 orang)'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    let configMasaKerja = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Masa Kerja'
      },
      subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 62.74
            },
            {
              name: "Firefox",
              y: 10.57
            },
            {
              name: "Internet Explorer",
              y: 7.23
            },
            {
              name: "Safari",
              y: 5.58
            },
            {
              name: "Edge",
              y: 4.02
            },
            {
              name: "Opera",
              y: 1.92
            },
            {
              name: "Other",
              y: 7.62
            }
          ]
        }
      ]
    }

    let configStatusPegawai = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Status Pegawai'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> (1300 orang)'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    let configBODGroup = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'BOD Group'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> (1300 orang)'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    let configAssessment = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Assessment'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> (1300 orang)'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    let configUnitKerja = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Unit Kerja'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> (1300 orang)'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    let configKategoriProyek = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Kategori Proyek'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b> (1300 orang)'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Other',
          y: 7.05
        }]
      }]
    }

    let configMBTI = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'MBTI'
      },
      subtitle: {
        text: 'Potensional Pegawai'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 62.74
            },
            {
              name: "Firefox",
              y: 10.57
            },
            {
              name: "Internet Explorer",
              y: 7.23
            },
            {
              name: "Safari",
              y: 5.58
            },
            {
              name: "Edge",
              y: 4.02
            },
            {
              name: "Opera",
              y: 1.92
            },
            {
              name: "Other",
              y: 7.62
            }
          ]
        }
      ]
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <CardWhiteComponent text="Statistik">
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <Col sm="12" md="4">
                    <Widget04 icon="icon-people" color="info" header="87.500" value="25" invert>Jumlah Pegawai</Widget04>
                  </Col>
                  <Col sm="12" md="4">
                    <Widget04 icon="icon-user-follow" color="success" header="385" value="25" invert>Jumlah Proyek</Widget04>
                  </Col>
                  <Col sm="12" md="4">
                    <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25" invert>Jumlah Unit Kerja</Widget04>
                  </Col>
                </Row>
              </Col>
            </CardWhiteComponent>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <NavbarDashboardComponent />
              </Col>
            </Row>

            <CardWhiteComponent text="Detail Statistik Pegawai">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configMasaKerja} />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <ReactHighcharts config={config} />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <ReactHighcharts config={configStatusPegawai} />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <ReactHighcharts config={configBODGroup} />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <ReactHighcharts config={configAssessment} />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <ReactHighcharts config={configUnitKerja} />
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <ReactHighcharts config={configKategoriProyek} />
                </Col>
              </Row>
            </CardWhiteComponent>

            <CardWhiteComponent text="Detail Statistik Pegawai">
              <Row>
                <Col>
                  <ReactHighcharts style={{ width: '100%' }} config={configMBTI} />
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
