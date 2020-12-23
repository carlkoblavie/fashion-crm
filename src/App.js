import './App.css'
import React, { useContext, createContext, useState } from 'react'
import LoginForm from './auth/loginForm'
import Dashboard from './dashboard/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  BrowserRouter
} from 'react-router-dom'
import useToken from './auth/useToken'

function App () {
  const { token, setToken } = useToken()

  if (!token) {
    console.log('token', token)
    return <LoginForm setToken={setToken} />
  }
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
