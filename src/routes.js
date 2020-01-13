import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const FilterDataKaryawan = React.lazy(() => import('./views/FilterPegawai/DataKaryawan'));
const ListPegawai = React.lazy(() => import('./views/DataMater/ListPegawai/ListPegawai'));
const ListPegawaiPJSOrientasi = React.lazy(() => import('./views/PJSOrientasi/ListPegawaiPJSOrientasi'));
const SummaryPegawai = React.lazy(() => import('./views/SummaryPegawai/SummaryPegawai'));
const InputMutasiRotasiPegawai = React.lazy(() => import('./views/MutasiPromosiPegawai/InputMutasiPromosiPegawai'));
const ReportMutasiPromosiPegawai = React.lazy(() => import('./views/MutasiPromosiPegawai/ReportMutasiPromosiPegawai'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/filter-pegawai', exact: true, name: 'Filter Pegawai', component: FilterDataKaryawan },
  { path: '/karyawan/:id', exact: true, name: 'User Details', component: Dashboard },
  { path: '/karyawan-filtered/:type/:field', exact: true, name: 'User Details', component: ListPegawai },
  { path: '/karyawan', exact: true, name: 'List Karyawan', component: ListPegawai },
  { path: '/summary-pegawai', exact: true, name: 'List Karyawan', component: SummaryPegawai },
  { path: '/input-mutasi-rotasi-pegawai', exact: true, name: 'List Karyawan', component: InputMutasiRotasiPegawai },
  { path: '/report-mutasi-rotasi-pegawai', exact: true, name: 'List Karyawan', component: ReportMutasiPromosiPegawai },
  { path: '/pjs-orientasi', exact: true, name: 'List Karyawan', component: ListPegawaiPJSOrientasi },
];

export default routes;
