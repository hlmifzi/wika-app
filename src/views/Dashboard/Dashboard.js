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

    const pieColors = (function () {
      let colors = []
      let base = ReactHighcharts.Highcharts.getOptions().colors[0]
      let i
      for (i = 0; i < 10; i += 1) {
        colors.push(ReactHighcharts.Highcharts.Color(base).brighten((i - 3) / 7).get());
      }
      return colors;
    }())

    let configPendidikan = {

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: false,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          // colors: pieColors,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} ',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'S2', y: 10.41 },
          { name: 'S1', y: 41.84 },
          { name: 'D4', y: 30.85 },
          { name: 'D3', y: 4.67 },
          { name: 'SMA', y: 4.18 }
        ]
      }],
      credits: {
        enabled: false
      },
    }

    let configMasaKerja = {
      chart: {
        type: 'column'
      },
      title: false,
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
          text: 'Total Karyawan'
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
          },
          showInLegend: true
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/> 800 orang'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "0 - 5 tahun",
              y: 62.74
            },
            {
              name: "6-10 tahun",
              y: 10.57
            },
            {
              name: "11 - 15 tahun",
              y: 7.23
            },
            {
              name: "16 - 20",
              y: 5.58
            },
            {
              name: "21 - 25 tahun",
              y: 4.02
            },
            {
              name: "26 - 30 tahun",
              y: 1.92
            }
          ]
        }
      ],
      credits: {
        enabled: false
      },
    }

    let configStatusPegawai = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: false,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          // colors: pieColors,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Share',
        point: {
          events: {
            click: function (event) {
              alert(this.name);
              window.open('#/data-karyawan', '_blank');
            }
          }
        },
        data: [
          { name: 'Organik', y: 61.41, },
          { name: 'Terampil', y: 11.84 },
          { name: 'Outsource', y: 8.85 },
          { name: 'PPCP', y: 7.67 },
          { name: 'Magang', y: 4.18 }
        ]
      }],
      credits: {
        enabled: false
      },
    }

    let configBODGroup = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: false,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          // colors: pieColors,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'BOD-5', y: 20.41 },
          { name: 'BOD-4', y: 31.84 },
          { name: 'BOD-3', y: 10.85 },
          { name: 'BOD-2', y: 24.67 },
          { name: 'BOD-1', y: 4.18 },
        ]
      }],
      credits: {
        enabled: false
      },
    }

    let configAssessment = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: false,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          // colors: pieColors,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Disarankan', y: 21.41 },
          { name: 'Disarankan dengan Pengembangan', y: 31.84 },
          { name: 'Tidak Disarankan', y: 30.85 },
        ]
      }],
      credits: {
        enabled: false
      },
    }

    // let configUnitKerja = {
    //   chart: {
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //     type: 'pie'
    //   },
    //   title: false,
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   accessibility: {
    //     point: {
    //       valueSuffix: '%'
    //     }
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: 'pointer',
    //       // colors: pieColors,
    //       dataLabels: {
    //         enabled: true,
    //         format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
    //         distance: -50,
    //         filter: {
    //           property: 'percentage',
    //           operator: '>',
    //           value: 4
    //         }
    //       },
    //       showInLegend: true
    //     },
    //   },
    //   series: [{
    //     name: 'Share',
    //     data: [
    //       { name: 'Divisi Pemasaran Sipil Umum', y: 61.41 },
    //       { name: 'Kantor Departemen', y: 10.85 },
    //       { name: 'Kantor Divisi', y: 4.67 },
    //       { name: 'Proyek Bandara Banyuwangi', y: 4.18 },
    //       { name: 'Proyek Double Double Track Manggarai - Jatinegara', y: 7.05 },
    //       { name: 'Proyek Gerbang Tol Bogor', y: 61.41 },
    //       { name: 'Proyek High Speed Railway Contractor Consotium (HSRCC) JO - Comittee Management', y: 10.85 },
    //       { name: 'Proyek High Speed Railway Contractor Consotium (HSRCC) JO - Project Team', y: 4.67 },
    //       { name: 'Proyek Lanjutan Pekerjaan Aksesbilitas', y: 4.18 },
    //       { name: 'Proyek LRT Kelapa Gading Velodrome (Main Works)', y: 7.05 },
    //       { name: 'Proyek Mass Rapid Transit (MRT CP101 & CP102 )', y: 61.41 },
    //       { name: 'Proyek MRT 104 & 105', y: 10.85 },
    //       { name: 'Proyek Pekerjaan Paket Penanganan Mendesak Bencana Alam Tanah Longsor Ruas Ciawi - Puncak - BTS, Kota Cianjur', y: 4.67 },
    //       { name: 'Proyek Pembangunan 6 Ruas Tol Dalam Kota', y: 4.18 },
    //       { name: 'Proyek Pembangunan Jalan Tol Serpong - Balaraja Seksi I A', y: 7.05 },
    //       { name: 'Proyek Rehabilitasi Saluran Tarum Barat Ruas Bekasi Cawang', y: 61.41 },
    //       { name: 'Proyek Soil Investigation', y: 10.85 },
    //       { name: 'Proyek Tol Kunciran', y: 4.67 }
    //     ]
    //   }],
    //   credits: {
    //     enabled: false
    //   },
    // }

    let configUnitKerja = {
      chart: {
        type: 'column'
      },
      title: false,
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
          text: 'Total Karyawan'
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
          },
          showInLegend: true
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/> 800 orang'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            { name: 'Divisi Pemasaran Sipil Umum', y: 61.41 },
            { name: 'Kantor Departemen', y: 30.85 },
            { name: 'Kantor Divisi', y: 4.67 },
            { name: 'Proyek Bandara Banyuwangi', y: 4.18 },
            { name: 'Proyek Double Double Track Manggarai - Jatinegara', y: 7.05 },
            { name: 'Proyek Gerbang Tol Bogor', y: 11.41 },
            { name: 'Proyek High Speed Railway Contractor Consotium (HSRCC) JO - Comittee Management', y: 10.85 },
            { name: 'Proyek High Speed Railway Contractor Consotium (HSRCC) JO - Project Team', y: 4.67 },
            { name: 'Proyek Lanjutan Pekerjaan Aksesbilitas', y: 4.18 },
            { name: 'Proyek LRT Kelapa Gading Velodrome (Main Works)', y: 7.05 },
            { name: 'Proyek Mass Rapid Transit (MRT CP101 & CP102 )', y: 21.41 },
            { name: 'Proyek MRT 104 & 105', y: 10.85 },
            { name: 'Proyek Pekerjaan Paket Penanganan Mendesak Bencana Alam Tanah Longsor Ruas Ciawi - Puncak - BTS, Kota Cianjur', y: 4.67 },
            { name: 'Proyek Pembangunan 6 Ruas Tol Dalam Kota', y: 4.18 },
            { name: 'Proyek Pembangunan Jalan Tol Serpong - Balaraja Seksi I A', y: 7.05 },
            { name: 'Proyek Rehabilitasi Saluran Tarum Barat Ruas Bekasi Cawang', y: 21.41 },
            { name: 'Proyek Soil Investigation', y: 10.85 },
            { name: 'Proyek Tol Kunciran', y: 4.67 }
          ]
        }
      ],
      credits: {
        enabled: false
      },
    }

    let configKategoriProyek = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: false,
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          // colors: pieColors,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Mega', y: 11.41 },
          { name: 'Besar', y: 21.84 },
          { name: 'Kecil', y: 30.85 },
          { name: 'Menengah', y: 24.67 },
        ]
      }],
      credits: {
        enabled: false
      },
    }

    let configMBTI = {
      chart: {
        type: 'column'
      },
      title: false,
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
            format: '{point.y:.1f} %'
          }
        },
        showInLegend: true
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} %</b> of total<br/> <b>700 orang</b>'
      },

      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            { name: "ENFJ", y: 100 },
            { name: "ENFP", y: 80 },
            { name: "ENTJ", y: 79 },
            { name: "ENTP", y: 75 },
            { name: "ESFJ", y: 70 },
            { name: "ESFP", y: 60 },
            { name: "ESTJ", y: 50 },
            { name: "ESTP", y: 49 },
            { name: "INFJ", y: 45 },
            { name: "INFP", y: 42 },
            { name: "INTJ", y: 40 },
            { name: "INTP", y: 39 },
            { name: "ISFJ", y: 32 },
            { name: "ISFP", y: 31 },
            { name: "ISTJ", y: 20 },
            { name: "ISTP", y: 1 },

          ]
        }
      ],
      credits: {
        enabled: false
      },
    }

    return (
      <div className="animated fadeIn">
        <Row>
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
          <Col xs={12} sm={5} md={5}>
            <CardWhiteComponent text="Masa Kerja">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configMasaKerja} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>

          <Col xs={12} sm={7} md={7}>
            <CardWhiteComponent text="Myers-Briggs Type Indicator (MBTI) ">
              <Row>
                <Col>
                  <ReactHighcharts style={{ width: '100%' }} config={configMBTI} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>

          <Col xs={12} sm={12} md={12}>
            <CardWhiteComponent text="Unit Kerja">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configUnitKerja} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>

          <Col xs={12} sm={4} md={4}>
            <CardWhiteComponent text="Status Pegawai">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configStatusPegawai} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>

          <Col xs={12} sm={4} md={4}>
            <CardWhiteComponent text="Pendidikan">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configPendidikan} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>


          <Col xs={12} sm={4} md={4}>
            <CardWhiteComponent text="Kategori Proyek">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configKategoriProyek} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>


          <Col xs={12} sm={6} md={6}>
            <CardWhiteComponent text="Assessment">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configAssessment} />
                </Col>
              </Row>
            </CardWhiteComponent>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <CardWhiteComponent text="BOD GROUP">
              <Row>
                <Col xs={12} sm={12} md={12}>
                  <ReactHighcharts config={configBODGroup} />
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
