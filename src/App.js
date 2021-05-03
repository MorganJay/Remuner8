import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import ProtectedRoute from './components/Routes/ProtectedRoute';
import Home from './pages/Homepage/Home';
import LoginPage from './pages/Login-Auth/Login';
import RegistrationPage from './pages/Login-Auth/Register';
import ResetPasswordPage from './pages/Login-Auth/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import Custom404 from './pages/404';
import LogOut from './pages/LogOut';
import logger from 'services/logService';

import './custom.scss';
import 'assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'assets/scss/argon-dashboard-react.scss';
import 'assets/css/page.styles.css';

logger.init();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogOut} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/resetPassword" component={ResetPasswordPage} />
        <ProtectedRoute path="/admin" component={Dashboard} />
        <Route path="/not-found" component={Custom404} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
