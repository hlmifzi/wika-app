import React from 'react'
import './scss/_login.scss'
import { Form, Button } from 'react-bootstrap'

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto mt-50" style={{ marginTop: '20vh' }}>
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Promotion App Wika</h5>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
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
    </div>
  );
}

export default App;
