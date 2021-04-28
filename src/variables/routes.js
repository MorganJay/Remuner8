import Index from 'pages/Dashboard/Index.js';
import AdminProfile from 'pages/Dashboard/AdminProfile';
import Employees from 'pages/Dashboard/Employees';
import Departments from 'pages/Dashboard/Departments';
import Payslip from 'pages/Dashboard/Payslip';
import Payroll from 'pages/Dashboard/Payroll';
import Leaves from 'pages/Dashboard/Leaves';
import Overtime from 'pages/Dashboard/Overtime';
import Timesheet from 'pages/Dashboard/Timesheet';
import JobDescription from 'pages/Dashboard/JobDescription';
<<<<<<< HEAD

import Custom404 from 'pages/404';
=======
import PayrollItems from 'pages/Dashboard/PayrollItems';
>>>>>>> 0d501b3472c239272761078555208b401eabea88

const routes = [
  [
    // dash routes
    {
      path: '/index',
      name: 'Dashboard',
      icon: 'ni ni-tv-2 text-primary',
      component: Index,
      layout: '/admin'
    },
    {
      path: '/user-profile',
      name: 'User Profile',
      icon: 'ni ni-single-02 text-blue',
      component: AdminProfile,
      layout: '/admin'
    }
  ],
  [
    // employee routes
    {
      path: '/employees',
      name: 'Employees',
      icon: 'fas fa-users text-blue',
      component: Employees,
      layout: '/admin'
    },

    {
      path: '/departments',
      name: 'Departments',
      icon: 'ni ni-building text-blue',
      component: Departments,
      layout: '/admin'
    },
    {
      path: '/jobdescriptions',
      name: 'Job Descriptions',
      icon: 'fas fa-suitcase text-blue',
      component: JobDescription,
      layout: '/admin'
    },
    // {
    //   path: '/salary-structure',
    //   name: 'Salary Structure',
    //   icon: 'ni ni-chart-bar-32 text-blue',
    //   component: SalaryStructure,
    //   layout: '/admin'
    // },
    {
      path: '/leaves',
      name: 'Leaves',
      icon: 'ni ni-user-run text-blue',
      component: Leaves,
      layout: '/admin'
    },
    {
      path: '/overtime',
      name: 'Overtime and Bonuses',
      icon: 'fas fa-hourglass-end text-blue',
      component: Overtime,
      layout: '/admin'
    },
    {
      path: '/timesheet',
      name: 'Timesheet',
      icon: 'fas fa-user-clock text-blue',
      component: Timesheet,
      layout: '/admin'
    }
    // {
    //   path: '/approvals',
    //   name: 'Approvals',
    //   icon: 'fas fa-thumbs-up text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // }
  ],
  [
    // hr routes
    // {
    //   path: '/accounts',
    //   name: 'Accounts',
    //   icon: 'fas fa-file-invoice-dollar text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    // {
    //   path: '/taxes',
    //   name: 'Taxes',
    //   icon: 'ni ni-spaceship text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    {
      path: '/payroll',
      name: 'Payroll',
      icon: 'fas fa-funnel-dollar text-primary',
      component: Payroll,
      layout: '/admin'
    },
    // {
    //   path: '/arrears',
    //   name: 'Arrears',
    //   icon: 'ni ni-support-16 text-primary',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    {
      path: '/payslip',
      name: 'Payslip',
      icon: 'ni ni-book-bookmark text-blue',
      component: Payslip,
      layout: '/admin'
    },
    {
      path: '/payroll-items',
      name: 'Payroll Items',
      icon: 'fas fa-money-bill-alt text-blue',
      component: PayrollItems,
      layout: '/admin'
    }
    // {
    //   path: '/loan-deduction',
    //   name: 'Loan Deduction',
    //   icon: 'fas fa-hand-holding-usd text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // }
  ],
  [
    // admin routes
    // {
    //   path: '/activities',
    //   name: 'Activities',
    //   icon: 'ni ni-spaceship text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    // {
    //   path: '/auth',
    //   name: 'Authentication',
    //   icon: 'ni ni-key-25 text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    // {
    //   path: '/users',
    //   name: 'Users',
    //   icon: 'fas fa-user text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    // {
    //   path: '/settings',
    //   name: 'Settings',
    //   icon: 'ni ni-settings-gear-65 text-blue',
    //   component: Custom404,
    //   layout: '/admin'
    // },
    {
      path: 'login',
      name: 'Log Out',
      icon: 'ni ni-curved-next text-blue',
      layout: '/'
    }
  ]
];

export default routes;
