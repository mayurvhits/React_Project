import './App.css';
import Login from './components/Login';
import Firstnavbar from './components/Firstnavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reachus from './components/ReachUs';
import About from './components/About'
import Background from './components/Background';
import Query from './components/Query'


function App() {
  return (
    <>
      <Router>
        <Firstnavbar />
        {/* <Background /> */}

        <Switch>
          <Route exact path="/Applicants">
            <Login />
          </Route>
          {/* <Route exact path="/About">
            <Reachus />
            </Route> */}
            <Route exact path="/About">
              <About />

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
