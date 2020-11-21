import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Label, Input } from 'reactstrap';
import StandardTable from '../../MyComponent/table/FilterSearchSortTable'

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
      <td><Link to={userLinkb}>
        <Badge color={getBadge(user.status2)}>Assessmen Job Target 1<br />{user.status2} </Badge><br />
      </Link></td>
    </tr >
  )
}

class DataKaryawan extends Component {
  state = {
    nama: "",
    data: [
      {
        key: '1',
        nip: 2019012,
        nama: 'cohn Brown',
        statusPegawai: 'Organik',
        fungsi: 'Manajer proyek (5 tahun)',
        masaKerja: '10 tahun 2 bulan',
        unitKerja: 'LRT',
        ek: 50,
        pk: 80,
        kukTeori: 90,
        kukPraktek: 90,
        assessmenJobTarget: 'Tidak Disarankan',
      },
      {
        key: '2',
        nip: '12O12',
        nama: 'aim Green',
        statusPegawai: 'Terampil',
        fungsi: 'Manajer proyek',
        masaKerja: '10 tahun 2 bulan',
        unitKerja: 'MRT',
        ek: 30,
        pk: 80,
        kukTeori: 80,
        kukPraktek: 90,
        assessmenJobTarget: 'Disarankan',

      },
      {
        key: '3',
        nip: '12O10',
        nama: 'toe Black',
        statusPegawai: 'Outsource',
        fungsi: 32,
        masaKerja: 80,
        unitKerja: 90,
        ek: 70,
        pk: 80,
        kukTeori: 80,
        kukPraktek: 70,
        assessmenJobTarget: 'Disarankan dengan Syarat',
      },
      {
        key: '4',
        nip: '12O12',
        nama: 'gim Red',
        fungsi: 32,
        masaKerja: 'New York No. 1 Lake Park',
        unitKerja: 'New York No. 1 Lake Park',
        ek: 70,
        pk: 80,
        kukTeori: 90,
        kukPraktek: 80,
      },

    ]
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
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-users"></i> Daftar Seluruh Karyawan
              </CardHeader>
              <CardBody>
                <StandardTable data={this.state.data} co />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DataKaryawan;
