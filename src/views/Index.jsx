/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Riwayat Fungsi</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Fungsi</th>
                      <th scope="col">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Produksi</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">Engineering</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">DAN</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">KOM</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">QSHE</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">OTHER</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">MUDA</th>
                      <td>1</td>
                    </tr>
                    <tr>
                      <th scope="row">MADYA</th>
                      <td>1</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col xl="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Proyek yang Pernah Ditangani</h3>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush text-center" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Jenis</th>
                      <th scope="col">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">MEGA</th>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row">BESAR</th>
                      <td>6</td>
                    </tr>
                    <tr>
                      <th scope="row">MENENGAH</th>
                      <td>5</td>
                    </tr>
                    <tr>
                      <th scope="row">KECIL</th>
                      <td>7</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
