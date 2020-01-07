import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const FilterDataKaryawan = React.lazy(() => import('./views/FilterPegawai/DataKaryawan'));
const ListPegawai = React.lazy(() => import('./views/DataMater/ListPegawai/ListPegawai'));
const ListPegawaiPJSOrientasi = React.lazy(() => import('./views/PJSOrientasi/ListPegawaiPJSOrientasi'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/filter-pegawai', exact: true, name: 'Filter Pegawai', component: FilterDataKaryawan },
  { path: '/karyawan/:id', exact: true, name: 'User Details', component: Dashboard },
  { path: '/karyawan', exact: true, name: 'List Karyawan', component: ListPegawai },
  { path: '/pjs-orientasi', exact: true, name: 'List Karyawan', component: ListPegawaiPJSOrientasi },
];

export default routes;
