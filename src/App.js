import './App.css';
import Login from './components/Login';
import Firstnavbar from './components/Firstnavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reachus from './components/ReachUs';
import Help from './components/Help'
import Background from './components/Background';
import Query from './components/Query'


function App() {
  return (
    <>
      <Router>
        <Firstnavbar />
        {/* <Background /> */}

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/About">
            <Reachus />
            </Route>
            <Route exact path="/help">
              <Help />

            </Route>
            <Route exact path="/query">
              <Query />

            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
