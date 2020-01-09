import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const DataKaryawan = React.lazy(() => import('./views/Dashboard/DataKaryawan'));
const DetailPegawai = React.lazy(() => import('./views/DetailPegawai/DetailPegawai'));
// const DetailPegawai = React.lazy(() => import('./views/Widgets'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/filter-pegawai', exact: true, name: 'Filter Pegawai', component: DataKaryawan },
  { path: '/karyawan/:id', exact: true, name: 'User Details', component: DetailPegawai },
];

export default routes;
