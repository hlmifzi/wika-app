import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const DataKaryawan = React.lazy(() => import('./views/Dashboard/DataKaryawan'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/data-karyawan', exact: true, name: 'User Details', component: DataKaryawan },
  { path: '/karyawan/:id', exact: true, name: 'User Details', component: Dashboard },
];

export default routes;
