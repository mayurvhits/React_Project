import Login from './components/Login';
import About from './components/About';
import Firstnavbar from './components/Firstnavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApplicantsForm from './components/ApplicantsForm';
import Query from './components/Query';
import UserRegistration from './components/UserRegistration';
import AdminLogin from './components/AdminLogin';
import AdminRegistration from './components/AdminRegistration'
import AdminTable from './components/AdminTable';

function Routes() {
  return (
    <>
      <Router>
        <Firstnavbar></Firstnavbar>
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route exact path={'/About'} component={About} />
          <Route exact path={'/Applicants'} component={ApplicantsForm} />
          <Route exact path={'/query'} component={Query} />
          <Route exact path={'/registration'} component={UserRegistration} />
          <Route exact path={'/Adminregistration'} component={AdminRegistration} />
          <Route exact path={'/admin'} component={AdminLogin} />
          <Route exact path={'/admintable'} component={AdminTable} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
