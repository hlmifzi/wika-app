import React from 'react'
import './scss/_login.scss'
import { Form, Button } from 'react-bootstrap'
import LoginLogo from './img/login-logo.jpeg'

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto height-card" >
          <div class="card card-signin my-5">
            <div class="card-body">
              <div class="card-title text-center">
                <img className="login-wika" src={LoginLogo} alt="wika-logo" />
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
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
  );
}

export default App;
