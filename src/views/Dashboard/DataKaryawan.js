import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Label, Input } from 'reactstrap';

import usersData from './sourceDataKaryawan'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'organik' ? 'success' :
      status === 'kontrak' ? 'warning' :
        status === 'magang' ? 'danger' :
          'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status} </Badge></Link></td>
      <td>{user.posisi}<br /><Badge color="primary">{user.lama_posisi}</Badge></td>
      <td>{user.EK}</td>
      <td>{user.PK}</td>
      <td>{user.KUK}</td>
      <td>{user.assessmen}</td>
    </tr>
  )
}

class DataKaryawan extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-users"></i> Daftar Seluruh Karyawan
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="3">
                    <FormGroup row>
                      <Col xs="12" md="12">
                        <Input type="select" name="select" id="select">
                          <option value="0">Pilih Logic</option>
                          <option value="1">Lebih Dari</option>
                          <option value="2">Kurang Dari</option>
                          <option value="3">Sama Dengan</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup row>
                      <Input type="number" id="cvv" placeholder="tahun" required />
                    </FormGroup>
                  </Col>
                  <Col md="2" row>
                    <FormGroup>
                      <Label htmlFor="cvv">tahun</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Masa Jabatan</th>
                      <th scope="col">Departemen</th>
                      <th scope="col">Status</th>
                      <th scope="col">Posisi Sekarang</th>
                      <th scope="col">EK</th>
                      <th scope="col">PK</th>
                      <th scope="col">KUK</th>
                      <th scope="col">Assessmen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user} />
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DataKaryawan;
