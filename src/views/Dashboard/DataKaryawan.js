import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Label, Input } from 'reactstrap';

import usersData from './sourceDataKaryawan'

function UserRow(props) {
  const user = props.user
  const userLink = `/dashboard/${user.id}`
  const userLinkb = `/assessmen-detail/${user.id}`

  const getBadge = (status) => {
    return status === 'Disarankan' ? 'success' :
      status === 'Disarankan Dengan Pengembangan' ? 'warning' :
        status === 'Tidak Disarankan' ? 'danger' :
          'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <th><Link to={userLink}>2019012</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.posisi}<br /><Badge color="primary">{user.lama_posisi}</Badge></td>
      <td>10 tahun 2 Bulan</td>
      <td>{user.role}</td>
      <td>{user.EK}</td>
      <td>{user.PK}</td>
      <td>{user.KUK}</td>
      <td>{user.KUK}</td>
      <td><Link to={userLinkb}><br /><Badge color={getBadge(user.status)}>{user.status} </Badge></Link></td>
      <td><Link to={userLinkb}><br /><Badge color={getBadge(user.status)}>{user.status} </Badge></Link></td>
      <td><Link to={userLinkb}><br /><Badge color={getBadge(user.status)}>{user.status} </Badge></Link></td>
    </tr >
  )
}

class DataKaryawan extends Component {
  state = {
    nama: "",
  }
  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-users"></i> Daftar Seluruh Karyawan
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="12">
                    <FormGroup row>
                      <Col md="12">
                        <Label htmlFor="selectSm">Nama</Label>
                      </Col>
                      <Col xs="12" md="12">
                        <Input type="number" id="name" placeholder="Nama Karyawan" onChange={(e) => this.setState({ nama: e.target.value })} required />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup row>
                      <Col md="12">
                        <Label htmlFor="selectSm">Masa jabatan</Label>
                      </Col>
                      <Col xs="12" md="12">
                        <Input type="select" name="select" id="select">
                          <option value="0">Pilih</option>
                          <option value="1">Lebih Dari</option>
                          <option value="2">Kurang Dari</option>
                          <option value="3">Sama Dengan</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup row>
                      <Col md="12">
                        <Label htmlFor="selectSm">Pilih Tahun</Label>
                      </Col>
                      <Col xs="12" md="12">
                        <Input type="select" name="select" id="select">
                          <option value="0">Pilih</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                          <option value="3">6</option>
                          <option value="3">7</option>
                          <option value="3">8</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup row>
                      <Col md="12">
                        <Label htmlFor="selectSm">Target Jabatan</Label>
                      </Col>
                      <Col xs="12" md="12">
                        <Input type="select" name="select" id="select">
                          <option value="0">Pilih</option>
                          <option value="1">General Manager</option>
                          <option value="2">Manager Divisi</option>
                          <option value="2">Manager Biro</option>
                          <option value="3">Manager Proyek</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup row>
                      <Col md="12">
                        <Label htmlFor="selectSm">Unit Kerja</Label>
                      </Col>
                      <Col xs="12" md="12">
                        <Input type="select" name="select" id="select">
                          <option value="0">Pilih</option>
                          <option value="1">LRT</option>
                          <option value="2">MRT</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">NIP</th>
                      <th scope="col">Nama</th>
                      <th scope="col">Fungsi</th>
                      <th scope="col">Masa Kerja</th>
                      <th scope="col">Unit Kerja</th>
                      <th scope="col">EK</th>
                      <th scope="col">PK</th>
                      <th scope="col">KUK Teori</th>
                      <th scope="col">KUK Praktek</th>
                      <th scope="col">Assessmen Job Fit</th>
                      <th scope="col">Assessmen Job Target 1</th>
                      <th scope="col">Assessmen Job Target 2</th>
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
