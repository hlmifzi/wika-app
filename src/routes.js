import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const DataKaryawan = React.lazy(() => import('./views/FilterPegawai/DataKaryawan'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/filter-pegawai', exact: true, name: 'Filter Pegawai', component: DataKaryawan },
  { path: '/karyawan/:id', exact: true, name: 'User Details', component: Dashboard },
];

export default routes;
