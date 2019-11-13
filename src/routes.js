/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";

var routes = [
  {
    path: "/index",
    name: "My Task",
    icon: "ni ni-check-bold text-green",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/overview",
    name: "My Overview",
    icon: "ni ni-hat-3 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "KUK",
    icon: "ni ni-bullet-list-67 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Assessment",
    icon: "ni ni-satisfied text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  }
];
export default routes;
