import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
function App() {

  const getLoginInfo = useSelector((state) => state.login.userIsLogin);



  return (
    
    <div className='app'>
      <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='login' element={<SignIn/>} />
    <Route element={<ProtectedRoute  user={getLoginInfo}/> }>
    <Route path='dashboard' element={<Dashboard/>} />
    </Route>
    
    </Routes>
    
    </BrowserRouter>

    </div>
    
    
    
  );
}

export default App;
