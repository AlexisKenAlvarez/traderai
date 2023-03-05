import React from 'react'
import About from './views/About'
import Hero from './views/Hero'
import Tiersystem from './views/Tiersystem'

const App = () => {
  return (
    <div className='bg-hero'>
      <Hero/>
      <Tiersystem/>
    </div>
  )
}

export default App