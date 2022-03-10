import Login from './components/Login';
import About from './components/About';
import Firstnavbar from './components/Firstnavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApplicantsForm from './components/ApplicantsForm';
import Query from './components/Query';
import Registration from './components/Registration';

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
          <Route exact path={'/registration'} component={Registration} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
