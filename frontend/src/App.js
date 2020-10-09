import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>

          <h1>Welcome to Proshop</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
