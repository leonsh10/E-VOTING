// import React from 'react';
// import {Link} from 'react-router-dom';

// export const sidebarData = [
//     {
//         title: "PARTITE",
//         link: "../content/partite.jsx"
//     },
//     {
//         title: "DEPUTETET",
//         link: "../content/deputetet.jsx"
//     },
//     {
//         title: "SHTETET",
//         link: "../content/shtetet.jsx"
//     },
//     {
//         title: "QYTETET",
//         link: "../content/qytetet.jsx"
//     },
//     {
//         title: "LOG OUT",
//         link: "/logout"
//     }
// ]

///////////////////////////////////////////////////////////////////////
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import * as FaIcons from 'react-icons/fa';
export const SidebarData = [
//   {
//     title: 'Home',
//     path: '/',
//     icon: <AiIcons.AiFillHome />,
//     cName: 'nav-text'
//   },
  {
    title: 'Partite',
    path: '/partite',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Deputetet',
    path: '/deputetet',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Shtetet',
    path: '/shtetet',
    icon: <FaIcons.FaCity />,
    cName: 'nav-text'
  },
  {
    title: 'Qytetet',
    path: '/qytetet',
    icon: <FaIcons.FaCity />,
    cName: 'nav-text'
  },
  {
    title: 'Votuesit',
    path: '/votuesit',
    icon: <IoIcons.IoMdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Home',
    path: '/homeDashboard',
    icon: <IoIcons.IoMdHome />,
    cName: 'nav-text'
  },
  {
    title: 'Votat',
    path: '/votat',
    icon: <IoIcons.IoMdPaper />,
    cName: 'nav-text'
  }

  // {
  //   title: 'Home',
  //   path: '/home',
  //   icon: <IoIcons.IoMdPerson />,
  //   cName: 'nav-text'
  // },

  // {
  //   title: 'Statistikat',
  //   path: '/statistikat',
  //   icon: <IoIcons.IoMdPerson />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Home',
  //   path: '/home',
  //   icon: <IoIcons.IoMdPerson />,
  //   cName: 'nav-text'
  // }
];