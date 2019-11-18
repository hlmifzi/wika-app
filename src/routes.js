import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AssessmenTask = React.lazy(() => import('./views/Dashboard/AssessmenTask'));
const KUKTask = React.lazy(() => import('./views/Dashboard/KUKTask'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/assessmen', name: 'Assessmen', component: AssessmenTask },
  { path: '/kuk', name: 'Assessmen', component: KUKTask },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
