import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' exact component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
