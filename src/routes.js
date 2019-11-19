import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AssessmenTask = React.lazy(() => import('./views/Dashboard/AssessmenTask'));
const AssessmenForm = React.lazy(() => import('./views/Dashboard/AssessmenForm'));
const KUKTask = React.lazy(() => import('./views/Dashboard/KUKTask'));
const KUKDetail = React.lazy(() => import('./views/Dashboard/KUKDetail'));
const MonitoringKontrak = React.lazy(() => import('./views/Dashboard/MonitoringKontrak'));
const DataKaryawan = React.lazy(() => import('./views/Dashboard/DataKaryawan'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/assessmen', name: 'Assessmen', component: AssessmenTask },
  { path: '/assessmen-detail/:id', name: 'Assessmen Deatil', component: AssessmenForm },
  { path: '/kuk', name: 'Assessmen', component: KUKTask },
  { path: '/kuk-detail/:id', name: 'Assessmen', component: KUKDetail },
  { path: '/monitoring-kontrak', exact: true, name: 'Users', component: MonitoringKontrak },
  { path: '/data-karyawan', exact: true, name: 'User Details', component: DataKaryawan },
  { path: '/karyawan/:id', exact: true, name: 'User Details', component: Dashboard },
];

export default routes;
