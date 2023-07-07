import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h3>Not found</h3>
      <Link to="/home/dashboard">Back to homepage</Link>
    </div>
  )
}

export default NotFound