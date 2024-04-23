// import logo from './logo.svg';
import './App.css';

// import { DatePicker } from 'antd';

import 'antd/dist/reset.css';
import Home from './pages/Home';
import Test from './pages/Test';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/test' element={<ProtectedRoute><Test /></ProtectedRoute>} />
           <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register />} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export function ProtectedRoute(props){
  if(localStorage.getItem('MyMoney-users')){
return props.children
  }
  else{
    return <Navigate to='/login' />
  }

}

export default App;
