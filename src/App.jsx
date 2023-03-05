import React from 'react'
import About from './views/About'
import Hero from './views/Hero'
import Tiersystem from './views/Tiersystem'
import Tools from './views/Tools'

const App = () => {
  return (
    <div className='bg-hero'>
      <Hero />
      <Tiersystem />
      <Tools />
    </div>
  )
}

export default App