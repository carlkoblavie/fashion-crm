import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Logout () {
  localStorage.clear('token')
  return (
    <Redirect to='/login' push />
  )
}
