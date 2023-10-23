import React, { useState, useEffect } from 'react'
import authService  from './appwrite/auth'
import { login as authLogin, logout as authLogout } from "./store/authSlice";

import './App.css'
import { useDispatch} from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from "./components" 

function App() {
  // loading for waiting for resources to come from appwrite servers
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(authLogin(userData));
        } else {
          dispatch(authLogout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
