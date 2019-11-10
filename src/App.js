import React, { useState, useEffect } from 'react'
import './scss/_login.scss'
import { Form, Button } from 'react-bootstrap'
import LoginLogo from './img/login-logo.jpeg'

const App = () => {
  const [Show, setShow] = useState(false)

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto height-card">
            <div class="card card-signin my-5" style={{ borderRadius: '8px' }}>
              <div class="card-body">
                <div class="text-center">
                  <img className="login-wika" src={LoginLogo} alt="wika-logo" />
                </div>
                <div class="card-title text-center">
                  <b>HC DSU 1</b>
                </div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Username" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" block>
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto text-center text-white">
            Made with ♥ byThinkthin
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
