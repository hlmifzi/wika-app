import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import NotifSwal from '../../../MyComponent/notification/Swal'
import Toast from '../../../MyComponent/notification/Toast'
import BrandLogo from '../../../assets/img/brand/logo2-white.png'
import { SignInAction } from './AuthAction'


const Background = {
  backgroundImage:
    `url(assets/img/backgroundLogin.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  margin: 'auto'
}

class Login extends Component {
  constructor() {
    super()
    this.state = {
      officeEmail: null,
      password: null
    }
  }

  SignInHandler = async () => {
    if (!this.state.officeEmail || !this.state.password) return NotifSwal.failed("Silahkan Masukkan Username dan Password")
    let action = await SignInAction(this.state)
    if (!action.data) return action
    localStorage.setItem('JWT', action.data.token);
    Toast.info(`Welcome to HRMIS Management`)
    window.location.href = "#/dashboard"

  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.SignInHandler()
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center" style={Background}>
        <div id="servertime" style={{ display: 'none' }}></div>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>HCDSU 1 IS</h1>
                      <p className="text-muted">HCDSU 1 Information System</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" onChange={(e) => this.setState({ officeEmail: e.target.value })} placeholder="Username" autoComplete="username" onKeyDown={this._handleKeyDown} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-key"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" autoComplete="current-password" onKeyDown={this._handleKeyDown} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={() => this.SignInHandler(this.state)}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white py-5 d-md-down-none" style={{ width: '44%', backgroundColor: '#eff3f6' }}>
                  <CardBody className="text-center">
                    <div>
                      <img src={BrandLogo} alt="Logo SIPP" width="70%" />
                      <p style={{ color: '#3ea3e9' }}>
                        <b>Sistem Informasi Manajemen Karyawan</b><br />
                        sebagai pendukung berjalannya operasional sesuai dengan kebutuhan perusahaan anda .</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default Login
