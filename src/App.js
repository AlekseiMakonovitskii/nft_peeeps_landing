import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Collection/>
    </div>
  )
}

export default App