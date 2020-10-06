import React from 'react'
import { Container } from 'react-bootstrap'
import Routes from 'routes'
import Header from 'components/header'

export default function App(props) {
  return (
    <Container fluid className="p-0">
      <Header />
      <Routes />
    </Container>
  )
}
