import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ProtectedRouted from './routes'
import { AuthProvider } from './contexts'
import { Home, Login } from './pages'
import './App.css'

const App = () => {

  return (
    <AuthProvider>
      <Routes>

      <Route path="/" element={<ProtectedRouted redirectTo="/login"/>}>
          <Route index element={<Home />} />
      </Route>
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
