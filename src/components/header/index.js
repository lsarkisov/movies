import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Header(props) {
  return (
    <Navbar className="navbar navbar-dark bg-dark shadow-sm logo">
      <a href="/">Logo</a>
    </Navbar>
  )
}
