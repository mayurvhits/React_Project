import Login from './components/Login';
import About from './components/About';
import Firstnavbar from './components/Firstnavbar';
import { BrowserRouter as Router, Route, Routes as Routess} from 'react-router-dom';
import ApplicantsForm from './components/ApplicantsForm';
import Query from './components/Query';
import UserRegistration from './components/UserRegistration';
import { AuthProvider } from './context/AuthContext';
// import AdminLogin from './components/AdminLogin';
import AgentRegistration from './components/AgentRegistration'
import AdminTable from './components/AdminTable';
import EditInfo from './components/EditInfo';
import ViewInfo from './components/ViewInfo';
import SingleData from './components/SingleData';
import AddEdit from './components/AddEdit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewTable from './components/NewTable';
import View from './components/View';
import Update from './components/Update';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
// import HomePage from './components/HomePage'
function Routes() {
  return (
    <>
          <AuthProvider>
      <Router>
        <Firstnavbar></Firstnavbar>
        <ToastContainer position="top-center" />
        <Routess>
          <Route  path={'/About'} element={<About />} />
          <Route  path={'/Applicants'} element={<ApplicantsForm />} />
          <Route  path={'/query'} element={<Query />} />

          <Route path={'/agentregistration'} element={<AgentRegistration />} />
          {/* <Route  path={'/admin'} element={AdminLogin} /> */}
          <Route  path={'/admintable'} element={<AdminTable />} />
          <Route  path={'/form'} element={<SingleData />} />
          <Route  path={'/addedit'} element={<AddEdit />} />
          <Route  path={'/update/:id'} element={<Update />} />
          <Route  path={'/view/:id'} element={<View />} />
          <Route  path={'/table'} element={<NewTable />} />
          <Route  path={'/editinfo/:id'} element={<EditInfo />} />
          <Route  path={'/viewinfo/:id'} element={<ViewInfo />} />
            <Route path={'/home'} element={<ProtectedRoute><Home /></ProtectedRoute>} />
            {/* <Route  path={'/home'} element={Home} /> */}
            <Route  path={'/registration'} element={<UserRegistration />} />
            <Route  path={'/'} element={<Login />} /> 
        </Routess>
          
          
      </Router>
        </AuthProvider>
        {/* <HomePage></HomePage> */}
    </>
  );
}

export default Routes;
