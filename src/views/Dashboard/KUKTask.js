import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Col, Row, CardBody, Table, Badge, Button } from 'reactstrap';
import Widget03 from '../Widgets/Widget03';
import NavbarComponent from '../../MyComponent/Nav/NavbarComponent'
import { CardWhiteComponent } from '../../MyComponent/CardCustom/CardComponent'

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/kuk-detail/${user.id}`

  const getBadge = (status) => {
    return status === 'Done' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Need Response' ? 'warning' :
          status === 'Over Deadline' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      <td>
        <button type="submit" class="btn btn-primary btn-sm">Isi</button>
      </td>
    </tr>
  )
}


class AssessmenTask extends Component {

  render() {
    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
            </Widget03>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <NavbarComponent />
            <CardWhiteComponent text="KUK">
              <Col xs={12} sm={12} md={12}>
                <Row>
                  <Col xl={6}>
                    <CardBody>
                      <div style={{ float: 'right' }}>
                        <Button type="submit" size="sm" color="primary"><i className="fa fa-plus"></i> Tambah</Button>
                      </div>
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th scope="col">Jenis KUK</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Assign By</th>
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
      </div >
    );
  }
}

export default AssessmenTask;
