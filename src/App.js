import './App.css';
import React from 'react';
import { useSelector } from 'react-redux'
import ProfilePage from './components/profile/profile';
import LoginPage from './components/loginpage/loginpage';
import { Navigate, Route, Routes } from 'react-router-dom';



function App() {

  const state = useSelector(state => state.auth)

  return (
    <div className="App">

      <h1>Test task: How's the weather?</h1>

      <div className='App_content'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ProfilePage login={state.login} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
