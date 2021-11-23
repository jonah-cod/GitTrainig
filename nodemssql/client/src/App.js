import './App.css';
// import Layout from './components/layout';
import {Routes, Route} from 'react-router-dom'
import Signinform from './components/signin/Signinform'
import Signupform from './components/signup/Signupform';
// import PrivateRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/sign-up" element={<Signupform />} /> 
          <Route path="/sign-in" element={<Signinform />} /> 
          {/* <>
          <PrivateRoute path="/home" element={<Signupform />} />
          </> */}
        </Routes>
      
      
    </div>
  );
}

export default App;
