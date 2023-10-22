import React, { useState, useEffect } from 'react'
import { Header, Footer } from "./components" 
import authService  from './appwrite/auth'
import { login as authLogin, logout as authLogout } from "./store/authSlice";

import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
  

function App() {
  // loading for waiting for resources to come from appwrite servers
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(authLogin(userData));
        } else {
          dispatch(authLogout());
        }
        
      })
      .finally(
        ()=>{setLoading(false)}
      )
  }, [])
  

  if (!loading) {
  return (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          {/* <main>
           space for outlet--@todo
          </main> */}
          <Footer />
        </div>
      </div>
    </>
  );
    
  } else {
    null
  }
  
}

export default App
