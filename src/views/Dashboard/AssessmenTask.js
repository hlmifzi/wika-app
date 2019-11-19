import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
  Col, Row, CardBody, Table, Badge, Button,
  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup
} from 'reactstrap';

import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import { CardWhiteComponent } from '../../MyComponent/CardCustom/CardComponent'

import usersData from '././Assessmen'

function UserRow(props) {
  const user = props.user
  const userLink = `/assessmen-detail/${user.id}`

  const getBadge = (status) => {
    return status === 'Disarankan' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Disarankan Dengan Syarat' ? 'warning' :
          status === 'Tidak Disarankan' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      <td>
        <Link to={userLink}><button type="submit" class="btn btn-primary btn-sm">Isi</button></Link>
      </td>
    </tr>
  )
}


class AssessmenTask extends Component {
  state = {
    Modal: false
  }
  render() {
    const userList = usersData.filter((user) => user.id < 10)
    const toggle = () => this.setState({ Modal: !this.state.Modal })


    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
            </Widget03>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <NavbarComponent />
            <CardWhiteComponent text="Assessmen">
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <Col xl={6}>
                    <CardBody>
                      <div style={{ float: 'right' }}>
                        <Button type="submit" size="sm" color="primary"
                          onClick={toggle}
                        ><i className="fa fa-plus"></i> Tambah</Button>
                      </div>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th scope="col">Jenis Assesmen</th>
                            <th scope="col">Waktu</th>
                            <th scope="col">Konsultan</th>
                            <th scope="col">status</th>
                            <th scope="col">Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userList.map((user, index) => {
                            return (
                              <>
                                <UserRow key={index} user={user} />
                              </>
                            )
                          })}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Col>
                </Row>
              </Col>
            </CardWhiteComponent>
          </Col>
        </Row>
        <Modal isOpen={this.state.Modal} toggle={toggle}>
          <ModalHeader toggle={toggle} style={{ backgroundColor: '#f0f3f5' }}>Kirim Assessmen</ModalHeader>
          <ModalBody>
            <Col xs="12" md="12">
              <FormGroup row>
                <Col md="12">
                  <Label htmlFor="selectSm">Pilih Assessmen</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input type="select" name="select" id="select">
                    <option value="0">Pilih</option>
                    <option value="1">Assessmen Manager</option>
                    <option value="1">Assessmen GM</option>
                    <option value="1">Assessmen Kepala Proyek</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="12">
              <FormGroup row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Nama Konsultan</Label>
                    <Input type="text" id="name" placeholder="Masukkan Nama Konsultan" required />
                  </FormGroup>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="12">
              <FormGroup row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Tanggal Assessmen</Label>
                    <Input type="date" id="name" placeholder="Masukkan Nama Konsultan" required />
                  </FormGroup>
                </Col>
              </FormGroup>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Send</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div >
    );
  }
}

export default AssessmenTask;
