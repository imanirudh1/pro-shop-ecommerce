import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Footer from './component/Footer'
import Header from './component/Header'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
