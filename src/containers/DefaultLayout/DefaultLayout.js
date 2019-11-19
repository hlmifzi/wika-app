import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
} from '@coreui/react';
// routes config
import routes from '../../routes';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }
  Karyawan(e) {
    e.preventDefault()
    this.props.history.push('/data-karyawan')
  }
  monitoring(e) {
    e.preventDefault()
    this.props.history.push('/monitoring-kontrak')
  }
  profile(e) {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)}
              onKaryawan={e => this.Karyawan(e)}
              onMonitoring={e => this.monitoring(e)}
              onProfile={e => this.profile(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <main className="main">
            <Card>
              <CardBody style={{ backgroundColor: "#20a8d8" }}>
              </CardBody>
            </Card>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/login" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
