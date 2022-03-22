import './App.css';

// import Registration from './components/Registration';

import Routes from './Routes';
import SignUp from './components/Signup';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
       
      <Routes></Routes>
      

       {/* <AuthProvider>
         <SignUp />                    // this for refference that how we can impelement authentication in firebase for signup 
       </AuthProvider> */}
      
      {/* <Registration /> */}
    
    </>
  );
}

export default App;
